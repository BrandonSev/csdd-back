const { Books } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await Books.findMany();
    return res.status(200).send(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Books.findOneById(id);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await Books.createOne(name);
    const [[books]] = await Books.findOneById(result.insertId);
    return res.status(201).send(books);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const {id } = req.params;
    await Books.updateOneById(req.books, id);
    const [books] = await Books.findOneById(id);
    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOneById = async (req, res) => {
  try {
    const {id} = req.params;
    const [result] = await Books.findOneById(id);
    if(result <= 0) return res.status(404).send("Livre introuvable");
  await Books.deleteOneById(id);
  return res.status(204).send("Livre supprimé");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById deleteOneById};
