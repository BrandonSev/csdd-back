const { Assets } = require("../models");

const findMany = async (req, res) => {
  try {
    const [result] = await Assets.findMany();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await Assets.findOneById(id);
    if (!result) return res.status(404).send();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await Assets.createOne(name);
    const [[newRoles]] = await Assets.findOneById(result.insertId);
    return res.status(201).send(newRoles);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await Assets.updateOneById(req.newRole, id);
    const [newRoles] = await Assets.findOneById(id);
    return res.status(200).send(newRoles);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await Assets.findOneById(id);
    if (!result.length) return res.status(404).send();
    await Assets.removeOneById(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
