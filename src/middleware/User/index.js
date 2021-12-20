const { User } = require("../../models");

const validatePutUser = async (req, res, next) => {
  try {
    const { address, postal_code, city, phone, password, picture } = req.body;
    // Vérifie si l'utilisateur existe bien dans la BDD
    const [[user]] = await User.findOneById(req.params.id);
    if (!user) return res.sendStatus(404);
    // Vérifie qu'au moins un des champs valide a la modification est bien dans le body de la requete
    if (!address && !postal_code && !city && !phone && !password && !picture) {
      return res.status(400).json({ message: "Fournissez des valeurs correct" });
    }
    // Object qui permettra de stocker les différentes informations reçu depuis le body de la requete
    const userInformation = {};
    if (address) {
      userInformation.address = address;
    }
    if (postal_code) {
      userInformation.postal_code = postal_code;
    }
    if (city) {
      userInformation.city = city;
    }
    if (phone) {
      userInformation.phone = phone;
    }
    if (password) {
      userInformation.password = password;
    }
    if (picture) {
      userInformation.picture = picture;
    }
    // On envoie dans la requete l'objet des valeurs saisie depuis la requete
    req.userInformation = userInformation;
    next();
  } catch (e) {
    return res.status(500).send(e);
  }
};

const validatePostUser = async (req, res, next) => {
  try {
    const { firstname, lastname, birthday, address, postal_code, city, email, phone, password } = req.body;
    const user = { firstname, lastname, birthday, address, postal_code, city, email, phone, password };
    const [[userWithEmail]] = await User.findOneByEmail(email);
    if (email && userWithEmail) {
      return res.status(422).json({ message: "Cet email est déjà enregistré, veuillez vous connecter" });
    }
    if (firstname && lastname && birthday && address && postal_code && city && email && phone && password) {
      req.userInformation = user;
      next();
    } else {
      return res.status(400).json({ message: "Toutes les valeurs nécessaires a l'inscription sont requis" });
    }
  } catch (err) {
    return res.send(err.message);
  }
};

module.exports = {
  validatePutUser,
  validatePostUser,
};
