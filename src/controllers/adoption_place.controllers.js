const { AdoptionPlace } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await AdoptionPlace.findMany();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[results]] = await AdoptionPlace.findOneById(id);
    if (!results) return res.status(404).send("Lieu d'adoption incorrect");
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await AdoptionPlace.createOne(req.adoption_place);
    const [[adoptionPlaceCreated]] = await AdoptionPlace.findOneById(result.insertId);
    return res.status(201).json({
      message: "Lieu d'adoption créé",
      adoption_place: adoptionPlaceCreated,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await AdoptionPlace.updateOneById(req.adoption_place, id);
    const [[adoption_place]] = await AdoptionPlace.findOneById(id);
    return res.status(200).json({ message: "L'adoption Place a bien été mise à jour", adoption_place });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOneById = async (req, res) => {
  try {
    const [result] = await AdoptionPlace.deleteOneById(req.params.id);
    if (result.affectedRows <= 0) {
      return res.status(404).send("Lieu d'adoption introuvable");
    }
    return res.status(204).json("Lieu d'adoption supprimé");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, deleteOneById };
