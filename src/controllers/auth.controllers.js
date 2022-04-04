require("dotenv").config();
const argon2 = require("argon2");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000;
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
    if (!user) return res.status(404).send({ message: "Email introuvable" });
    if (user.cotisation_payed === 0)
      return res.status(403).send({ message: "Vos cotisations ne sont pas à jour, veuillez régulariser vos cotisations" });
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

module.exports = { signIn, logout };
