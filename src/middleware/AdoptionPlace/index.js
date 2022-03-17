const { AdoptionPlace } = require("../../models");

const validateCreateAdoptionPlace = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(422).send();
  const [[adoptionPlace]] = await AdoptionPlace.findOneByName(name);
  if (adoptionPlace) return res.status(422).send("Lieu d'adoption déjà existant");
  req.adoption_place = { name };
  return next();
};

const validatePutAdoptionPlace = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) return res.status(422).send("Fournissez des valeurs correctes");
  const [[adoptionPlace]] = await AdoptionPlace.findOneByName(name);
  if (adoptionPlace) return res.status(422).send("Lieu d'adoption déjà existant");
  const [[adoption_place]] = await AdoptionPlace.findOneById(id);
  if (!adoption_place) return res.status(404).send("Lieu d'adoption introuvable");
  if (name) {
    req.adoption_place = { name };
  }
  return next();
};

module.exports = { validateCreateAdoptionPlace, validatePutAdoptionPlace };
