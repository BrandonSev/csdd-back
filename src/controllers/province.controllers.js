const { Province } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await Province.findMany();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Province.findOneById(id);
    if (!results) return res.status(404).send("Province incorrecte");
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await Province.createOne(req.province);
    const [[provinceCreated]] = await Province.findOneById(result.insertId);
    return res.status(201).json({
      message: "Province créée",
      province: provinceCreated,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params.id;
    await Province.updateOneById(req.province, id);
    const [[province]] = await Province.updateOneById(id);
    return res.status(200).json({ message: "La Province a bien été mise à jour" }, province);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOneById = async (req, res) => {
  try {
    const [result] = await Province.deleteOneById(req.params.id);
    if (!result) {
      return res.status(404).send("Province introuvable");
    }
    return res.status(204).json("Province supprimée");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, deleteOneById };
