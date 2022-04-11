require("dotenv").config();
const argon2 = require("argon2");
const { User, Token } = require("../models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const maxAge = 3600 * 1000;
// Function qui permet de génerer un token jwt
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

/**
 * Middleware qui permet de s'inscrire
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send();
  try {
    const [[user]] = await User.findOneByEmail(email);
    if (!user.email) return res.status(404).send({ message: "Email introuvable" });
    if (user.cotisation_payed === 0)
      return res.status(403).send({ message: "Vos cotisations ne sont pas à jour, veuillez régulariser vos cotisations" });
    if (user.active !== 1) return res.status(403).send({ message: "Votre compte est en cours de validation" });
    const comparison = await argon2.verify(user.password, password);
    if (comparison) {
      const token = createToken(user.id);
      res.cookie("jwt", token, { httpOnly: true, secure: true, sameSite: true, maxAge });
      return res.status(200).json({
        message: "Connexion réussi",
        token,
        user,
      });
    }
    return res.status(400).json({ message: "Mot de passe incorrect, veuillez réessayer" });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
/**
 * Middleware qui permet de déconnecter
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const logout = async (req, res) => {
  if (req.cookies.jwt) {
    return res.clearCookie("jwt").status(200).json({ message: "Vous êtes maintenant déconnecté" });
  } else {
    return res.status(400).json({ message: "Vous n'êtes actuellement pas connecté" });
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const [[user]] = await User.findOneByEmail(email);
    if (!user.id) return res.status(404).send({ message: "Aucun compte n'a été trouvé avec cet email" });

    const [[token]] = await Token.findOneByUserId(user.id);
    let newToken;
    if (!token) {
      const date = new Date();
      date.setMinutes(date.getMinutes() + 10);
      const [newTokenCreated] = await Token.createOne({
        users_id: user.id,
        token: crypto.randomBytes(32).toString("hex"),
        expireAt: date,
      });
      [[newToken]] = await Token.findOneById(newTokenCreated.insertId);
    }
    req.link = `${process.env.CLIENT_ORIGIN}/password/reset-password/${user.id}/${token ? token.token : newToken.token}`;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const resetPassword = async (req, res, next) => {
  const { token, userId } = req.params;
  const { password, confirmPassword } = req.body;

  if (!password && !confirmPassword) return res.status(400).send({ message: "fd" });
  if (password !== confirmPassword) return res.status(400).send({ message: "Les mots de passe ne correspondent pas" });
  if (token && userId) {
    const [[userToken]] = await Token.findOneByUserIdAndToken(userId, token);
    if (!userToken) return res.status(404).send();
    if (new Date(userToken.expireAt).getTime() <= new Date().getTime()) {
      await Token.removeOneByUsersId(userId);
      return res.status(401).send({ message: "Le token à éxpiré, veuillez renouveller la demande" });
    }
    await User.updateOneById(
      {
        password: await argon2.hash(password),
      },
      userId,
    );
    await Token.removeOneByUsersId(userId);
    return res.status(200).send({ message: "Le mot de passe à bien été modifié" });
  }
  return res.status(400).send({ message: "Toutes les informations nécessaire sont requises" });
};

module.exports = { signIn, logout, forgotPassword, resetPassword };
