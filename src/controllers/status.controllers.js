const { Status } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await Status.findMany();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[results]] = await Status.findOneById(id);
    if (!results) return res.status(404).send();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await Status.createOne(name);
    const [[statusCreated]] = await Status.findOneById(result.insertId);
    return res.status(201).json({
      message: "Votre statut a bien été ajouté",
      statu: statusCreated,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await Status.updateOneById(req.newStatus, id);
    const [newStatus] = await Status.findOneById(id);
    return res.status(200).send(newStatus);
  } catch (err) {
    return res.status(500).send(err.message);
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
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
