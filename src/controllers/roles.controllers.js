const { Roles } = require("../models");

const findMany = async (req, res) => {
  try {
    const [result] = await Roles.findMany();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await Roles.findOneById(id);
    if (!result) return res.status(404).send();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await Roles.createOne(name);
    const [[newRoles]] = await Roles.findOneById(result.insertId);
    return res.status(201).send(newRoles);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await Roles.updateOneById(req.newRole, id);
    const [newRoles] = await Roles.findOneById(id);
    return res.status(200).send(newRoles);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await Roles.findOneById(id);
    if (!result.length) return res.status(404).send();
    await Roles.removeOneById(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
