const { Room } = require("../models");

const findMany = async (req, res) => {
  try {
    const [results] = await Room.findMany();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Room.findOneById(id);
    if (!results) return res.status(404).send("Chambre inconnue");
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await Room.createOne(req.room);
    const [[roomCreated]] = await Room.findOneById(result.insertId);
    return res.status(201).json({
      message: "Chambre créée",
      room: roomCreated,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await Room.updateOneById(req.room, id);
    const [[room]] = await Room.updateOneById(id);
    return res.status(200).json({ message: "La chambre a bien été créée" }, room);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOneById = async (req, res) => {
  try {
    const [result] = await Room.deleteOneById(req.params.id);
    if (!result) {
      return res.status(404).send("Chambre introuvable");
    }
    return res.status(204).json("Chambre supprimée");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findMany, findOneById, createOne, updateOneById, deleteOneById };
