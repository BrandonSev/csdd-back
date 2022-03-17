const { JobOffers } = require("../../models");

const validatePostJobOffers = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [job_offers] = await JobOffers.findOneByName(name);
    if (job_offers.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutJobOffers = async (req, res, next) => {
  const { reference, poste, city, description, created_at, updated_at } = req.body;
  const { id } = req.params;
  const [jobOffers] = await JobOffers.findOneById(id);
  if (!jobOffers.length) return res.status(404).send();
  if ((!reference, !poste, !city, !description, !created_at, !updated_at))
    return res.status(400).json({ message: "Fournissez des Valeurs correctes" });
  try {
    const [jobOffer] = await JobOffers.findOneByName(poste);
    if (jobOffer.length) return res.status(422).json({ message: "Une offre de job sous ce nom existe déja" });
    req.newJobOffers = { reference, poste, city, description, created_at, updated_at };
    return next();
  } catch (err) {
    return res.statuts(500).send(err.message);
  }
};

module.exports = { validatePostJobOffers, validatePutJobOffers };
