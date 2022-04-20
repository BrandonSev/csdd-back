const { User, Message } = require("../../models");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const validatePutUser = async (req, res, next) => {
  try {
    const { address, postal_code, city, phone, email, password, picture, province_id, adoption_place_id, adoption_date } = req.body;
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
      const hasedPassword = await argon2.hash(password);
      userInformation.password = hasedPassword;
    }
    if (picture) {
      userInformation.picture = picture;
    }
    if (email) {
      userInformation.email = email;
    }
    if (province_id) {
      userInformation.province_id = province_id;
    }
    if (adoption_place_id) {
      userInformation.adoption_place_id = adoption_place_id;
    }
    if (adoption_date) {
      userInformation.adoption_date = adoption_date;
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
    const { firstname, lastname, birthday, address, postal_code, city, email, phone, password, adoption_place_id, province_id, adoption_date } =
      req.body;
    const user = { firstname, lastname, birthday, address, postal_code, city, email, phone, password, province_id, adoption_place_id, adoption_date };
    const [[userWithEmail]] = await User.findOneByEmail(email);
    if (userWithEmail.id) {
      return res.status(422).json({ message: "Cet email est déjà enregistré, veuillez vous connecter" });
    }
    if (
      firstname &&
      lastname &&
      birthday &&
      address &&
      postal_code &&
      city &&
      email &&
      phone &&
      password
      // province_id &&
      // adoption_place_id &&
      // adoption_date
    ) {
      const hasedPassword = await argon2.hash(password);
      user.password = hasedPassword;
      req.userInformation = user;
      return next();
    }
    return res.status(400).json({ message: "Toutes les valeurs nécessaires a l'inscription sont requises" });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const checkUserQuery = async (req, res, next) => {
  const { firstname, lastname, birthday } = req.query;
  if (firstname && lastname) {
    try {
      let user;
      if (birthday) {
        [user] = await User.findOneByFirstnameLastnameAndBirthday(firstname, lastname, birthday);
      } else {
        [user] = await User.findOneByFirstnameAndLastname(firstname, lastname);
      }
      if (!user.length) return res.status(404).send();
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
  if (!firstname || !lastname) {
    return res.status(400).send();
  }
  return next();
};

const requestCreateUser = async (req, res, next) => {
  try {
    await Message.createOne({
      message: `${req.newUser.firstname} ${req.newUser.lastname} à fait une demande d'accès à la plateforme.`,
      users_id: req.newUser.id,
    });
    return next();
  } catch (err) {
    return res.send(err.message);
  }
};

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    return jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
      if (err) return res.send(err);
      return next();
    });
  }
  return res.status(403).json({ message: "Vous devez être connecté pour continuer" });
};

const checkAdmin = async (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname, birthday, room_id, reception_place_id, reception_date, cotisation_payed, roles, active } = req.body;
  // verifier si l'utilisateur a le role admin
  const userRole = req.user?.roles?.split(",");
  if (userRole?.includes("admin")) {
    if (firstname) {
      req.userInformation = { ...req.userInformation, firstname };
    }
    if (lastname) {
      req.userInformation = { ...req.userInformation, lastname };
    }
    if (birthday) {
      req.userInformation = { ...req.userInformation, birthday };
    }
    if (room_id) {
      req.userInformation = { ...req.userInformation, room_id };
    }
    if (reception_place_id) {
      req.userInformation = { ...req.userInformation, reception_place_id };
    }
    if (reception_date) {
      req.userInformation = { ...req.userInformation, reception_date };
    }
    if (typeof cotisation_payed === "number") {
      req.userInformation = { ...req.userInformation, cotisation_payed };
    }
    if (typeof active === "number") {
      req.userInformation = { ...req.userInformation, active };
    }
    if (roles) {
      await User.deleteOlderRolesForUser(id);
      await roles.map(async (role) => {
        await User.createRolesForUser(id, role);
      });
    }
  }
  return next();
};

module.exports = {
  validatePutUser,
  validatePostUser,
  checkUserQuery,
  requestCreateUser,
  isAuthenticated,
  checkAdmin,
};
