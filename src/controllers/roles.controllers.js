const Roles = require("../models/roles.model");

const findMany = async (req, res) => {
  try {
    const [result] = await Roles.findMany();
    return res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const findOnebyId = async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await Roles.findOnebyId(id);
    return res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await Roles.createOne(name);
    const [[newRoles]] = await Roles.findOneById(result.insertId);
    return res.status(201).send(newRoles);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOnebyId, createOne };
