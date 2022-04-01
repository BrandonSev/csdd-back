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
    return next();
  } catch (e) {
    return res.status(500).send(e);
  }
};

const validatePostUser = async (req, res, next) => {
  try {
    const { firstname, lastname, birthday, address, postal_code, city, email, phone, password, adoption_place_id, province_id } = req.body;
    const user = { firstname, lastname, birthday, address, postal_code, city, email, phone, password, province_id, adoption_place_id };
    const [[userWithEmail]] = await User.findOneByEmail(email);
    if (email && userWithEmail) {
      return res.status(422).json({ message: "Cet email est déjà enregistré, veuillez vous connecter" });
    }
    if (firstname && lastname && birthday && address && postal_code && city && email && phone && password && province_id && adoption_place_id) {
      req.userInformation = user;
      return next();
    }
    return res.status(400).json({ message: "Toutes les valeurs nécessaires a l'inscription sont requises" });
  } catch (err) {
    return res.send(err.message);
  }
};

const checkUserQuery = async (req, res, next) => {
  const { firstname, lastname, birthday } = req.query;
  if (firstname && lastname) {
    try {
      const [user] = await User.findOneByFirstnameAndLastname(firstname, lastname);
      if (!user.length) return res.status(404).send();
      return res.status(200).send(user);
    } catch (err) {
      return res.send(err.message);
    }
  }
  if (!firstname || !lastname) {
    return res.status(400).send();
  }
  return next();
};

module.exports = {
  validatePutUser,
  validatePostUser,
  checkUserQuery,
};
