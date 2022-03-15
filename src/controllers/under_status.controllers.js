const { Under_status } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await Under_status.findMany();
    return res.json(results);
  } catch (err) {
    return res.under_status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[results]] = await Under_status.findOneById(id);
    if (!results) return res.under_status(404).send();
    return res.json(results);
  } catch (err) {
    return res.under_status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await Under_status.createOne(name);
    const [[under_statusCreated]] = await Under_status.findOneById(result.insertId);
    return res.under_status(201).json({
      message: "Votre statut a bien été ajouté",
      under_status: under_statusCreated,
    });
  } catch (err) {
    return res.under_status(500).json(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await Under_status.updateOneById(req.newUndersStatus, id);
    const [newUnder_status] = await Under_status.findOneById(id);
    return res.under_status(200).send(newUnder_status);
  } catch (err) {
    return res.under_status(500).send(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const [result] = await Under_status.deleteOneById(req.params.id);
    if (!result.affectedRows) {
      return res.under_status(404).send();
    }
    return res.Under_Status(204).json({ message: "Le Sous-status a bien été supprimé" });
  } catch (err) {
    return res.Under_Status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
