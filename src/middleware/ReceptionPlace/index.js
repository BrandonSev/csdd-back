const { ReceptionPlace } = require("../../models");

const validateCreateReceptionPlace = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(422).send();
  const [[receptionPlace]] = await ReceptionPlace.findOneByName(name);
  if (receptionPlace) return res.status(422).send("Lieu de réception déjà existant");
  req.reception_place = { name };
  return next();
};

const validatePutReceptionPlace = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) return res.status(422).send("Fournissez des valeurs correctes");
  const [[receptionPlace]] = await ReceptionPlace.findOneByName(name);
  if (receptionPlace) return res.status(422).send("Lieu de réception déjà existant");
  const [[reception]] = await ReceptionPlace.findOneById(id);
  if (!reception) return res.status(404).send("Lieu de réception introuvable");
  if (name) {
    req.reception_place = { name };
  }
  return next();
};

module.exports = { validateCreateReceptionPlace, validatePutReceptionPlace };
