const { Status } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await Status.findMany();
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[results]] = await Status.findOneById(id);
    if (!results) return res.status(404).send();
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await Status.createOne(req.StatusInformation);
    const [[statusCreated]] = await Status.findOneById(result.insertId);
    return res.status(201).json({
      message: "Votre statut a bien été ajouté",
      statu: statusCreated,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const [result] = await Status.deleteOneById(req.params.id);
    if (!result.affectedRows) {
      return res.status(404).send();
    }
    return res.status(204).json({ message: "Le statut a bien été supprimé" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, removeOneById };
