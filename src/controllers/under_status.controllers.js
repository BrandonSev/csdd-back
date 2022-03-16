const { UnderStatus } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await UnderStatus.findMany();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[results]] = await UnderStatus.findOneById(id);
    if (!results) return res.status(404).send();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await UnderStatus.createOne(req.newUnderStatus);
    const [[under_statusCreated]] = await UnderStatus.findOneById(result.insertId);
    return res.status(201).json({
      message: "Votre statut a bien été ajouté",
      under_status: under_statusCreated,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await UnderStatus.updateOneById(req.newUnderStatus, id);
    const [[newUnder_status]] = await UnderStatus.findOneById(id);
    return res.status(200).send(newUnder_status);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const [result] = await UnderStatus.removeOneById(req.params.id);
    if (result.affectedRows <= 0) {
      return res.status(404).send();
    }
    return res.status(204).json({ message: "Le Sous-status a bien été supprimé" });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
