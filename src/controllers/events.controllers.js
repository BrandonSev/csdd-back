const { Events } = require("../models");

const findMany = async (req, res) => {
  try {
    const [result] = await Events.findMany();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await Events.findOneById(id);
    if (!result) return res.status(404).send();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await Events.createOne(name);
    const [[newEvents]] = await Events.findOneById(result.insertId);
    return res.status(201).send(newEvents);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await Events.updateOneById(req.newRole, id);
    const [newEvents] = await Events.findOneById(id);
    return res.status(200).send(newEvents);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await Events.findOneById(id);
    if (!result.length) return res.status(404).send();
    await Events.removeOneById(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
