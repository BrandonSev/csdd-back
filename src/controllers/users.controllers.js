const { User } = require("../models");

// Méthode qui permet de recuperer tous les utilisateurs
const findMany = async (req, res) => {
  try {
    const [results] = await User.findMany();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de recuperer un utilisateur par son ID
const findOneById = async (req, res) => {
  const status = req.method === "POST" ? 201 : 200;
  const id = req.params.id ? req.params.id : req.id;
  try {
    const [[results]] = await User.findOneById(id);
    if (!results) return res.status(404).send();
    return res.status(status).json({ ...results, roles: results.roles.split(",") });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de créer un utilisateur
const createOne = async (req, res, next) => {
  try {
    const [result] = await User.createOne(req.userInformation);
    const [[userCreated]] = await User.findOneById(result.insertId);
    req.newUser = userCreated;
    req.id = result.insertId;
    return next();
    // return res.status(201).json({
    //   message:
    //     "Votre demande à bien été enregistrer, votre compte est en cours de validation, vous serez avertis par mail lors de l'activation de votre compte",
    //   user: userCreated,
    // });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Méthode qui permet de mettre a jour les informations d'un utilisteur par son ID
const updateOneById = async (req, res) => {
  try {
    await User.updateOneById(req.userInformation, req.params.id);
    const [[user]] = await User.findOneById(req.params.id);
    return res.status(200).json({ message: "Le compte à bien été modifier", user });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de supprimer un utilisateur par son ID
const removeOneById = async (req, res) => {
  try {
    const [result] = await User.deleteOneById(req.params.id);
    if (!result.affectedRows) {
      return res.status(404).send();
    }
    return res.status(204).json({ message: "Le compte à bien été supprimer" });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
