const { ReceptionPlace } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await ReceptionPlace.findMany();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await ReceptionPlace.findOneById(id);
    if (!results) return res.status(404).send("Lieu de Réception incorrect");
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await ReceptionPlace.createOne(req.reception_place);
    const [[receptionPlaceCreated]] = await ReceptionPlace.findOneById(result.insertId);
    return res.status(201).json({
      message: "Lieu de Réception créé",
      reception_place: receptionPlaceCreated,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params.id;
    await ReceptionPlace.updateOneById(req.reception_place, id);
    const [[reception_place]] = await ReceptionPlace.updateOneById(id);
    return res.status(200).json({ message: "La Reception Place a bien été mise à jour" }, reception_place);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOneById = async (req, res) => {
  try {
    const [result] = await ReceptionPlace.deleteOneById(req.params.id);
    if (!result) {
      return res.status(404).send("Lieu de Réception introuvable");
    }
    return res.status(204).json("Lieu de Réception supprimé");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, deleteOneById };
