const { JobOffers } = require("../../models");

const validatePostJobOffers = async (req, res, next) => {
  const { reference, poste, city, description } = req.body;
  const [[job_offers]] = await JobOffers.findOneByReference(reference);
  if (job_offers) return res.status(422).send({ message: "Une référence sous ce nom existe déjà" });
  if (!reference && !poste && !city && !description) return res.status(422).json({ message: "Fournissez des valeurs correctes" });
  req.job_offers = { reference, poste, city, description };
  return next();
};

const validatePutJobOffers = async (req, res, next) => {
  const { poste, city, description } = req.body;
  const { id } = req.params;
  const [jobOffers] = await JobOffers.findOneById(id);
  if (!jobOffers.length) return res.status(404).send();
  if (!poste || !city || !description) {
    return res.status(400).json({ message: "Fournissez des Valeurs correctes" });
  }
  try {
    req.job_offers = { poste, city, description };
    return next();
  } catch (err) {
    return res.statuts(500).send(err.message);
  }
};

module.exports = { validatePostJobOffers, validatePutJobOffers };
