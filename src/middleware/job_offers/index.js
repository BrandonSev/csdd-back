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
  const { name } = req.body;
  const { id } = req.params;
  const [job_offers] = await JobOffers.findOneById(id);
  if (!job_offers.length) return res.status(404).send();
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [job_offer] = await JobOffers.findOneByName(name);
    if (job_offer.length) return res.status(422).json({ message: "Une offre de job sous ce nom existe déjà" });
    req.newJobOffers = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validatePostJobOffers, validatePutJobOffers };
