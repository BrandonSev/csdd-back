const receptionPlaceRouter = require("express").Router();

const { validatePostUser } = require("../middleware/User");
const ReceptionPlace = require("../models/reception_place");

receptionPlaceRouter.get("/", async (req, res) => {
  try {
    const [results] = await ReceptionPlace.findMany();
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

receptionPlaceRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await ReceptionPlace.findOneById(id);
    if (!results) return res.status(404).send("Lieu de Réception introuvable");
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

receptionPlaceRouter.post("/", validatePostUser, async (req, res) => {
  try {
    const [result] = await ReceptionPlace.createONe(req.reception_place);
    const [[receptionPlaceCreated]] = await ReceptionPlace.findOneById(result.insertId);
    return res.status(201).json({
      message: "Lieu de Réception créé",
      reception_place: receptionPlaceCreated,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

receptionPlaceRouter.delete("/:id", async (req, res) => {
  try {
    const [result] = await ReceptionPlace.deleteOneById(req.params.id);
    if (!result) {
      return res.status(404).send("Lieu de Réception introuvable");
    }
    return res.status(204).json("Lieu de Réception supprimé");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = receptionPlaceRouter;
