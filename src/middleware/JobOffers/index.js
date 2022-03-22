const { JobOffers } = require("../../models");

const validatePostJobOffers = async (req, res, next) => {
  const { reference, poste, city, description } = req.body;
  const [[job_offers]] = await JobOffers.findOneByReference(reference);
  if (job_offers) return res.status(422).send({ message: "Cette référence existe déjà" });
  if (!reference && !poste && !city && !description) return res.status(422).json({ message: "Fournissez des valeurs correctes" });
  req.job_offers = { reference, poste, city, description };
  return next();
};

const validatePutJobOffers = async (req, res, next) => {
  const { poste, city, description } = req.body;
  const { id } = req.params;
  const [jobOffers] = await JobOffers.findOneById(id);
  if (!jobOffers.length) return res.status(404).send();
  const job_offers = {};
  if (poste) job_offers.poste = poste;
  if (city) job_offers.city = city;
  if (description) job_offers.description = description;
  req.job_offers = job_offers;
  return next();
};

module.exports = { validatePostJobOffers, validatePutJobOffers };
