const { JobOffers } = require("../models");

const findMany = async (req, res) => {
  try {
    const [result] = await JobOffers.findMany();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await JobOffers.findOneById(id);
    if (!result) return res.status(404).send();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await JobOffers.createOne(name);
    const [[newJobOffers]] = await JobOffers.findOneById(result.insertId);
    return res.status(201).send(newJobOffers);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await JobOffers.updateOneById(req.newRole, id);
    const [newJobOffers] = await JobOffers.findOneById(id);
    return res.status(200).send(newJobOffers);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await JobOffers.findOneById(id);
    if (!result.length) return res.status(404).send();
    await JobOffers.removeOneById(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById };
