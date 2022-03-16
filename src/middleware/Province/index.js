const { Province } = require("../../models");

const validateCreateProvince = async (req, res, next) => {
  const { name } = req.body;
  const [[province]] = await Province.findOneByName(name);
  if (province) return res.status(422).send({ message: "Une province sous ce nom existe déjà" });
  if (!name) return res.status(422).send();
  req.province = { name };
  return next();
};

const validatePutProvince = async (req, res, next) => {
  const { name } = req.body;
  const [[province]] = await Province.findOneByName(name);
  if (province) return res.status(422).send({ message: "Une province sous ce nom existe déjà" });
  const [[provinceId]] = await Province.findOneById(req.params.id);
  if (!provinceId) return res.status(404).send();
  req.province = { name };
  return next();
};

module.exports = { validateCreateProvince, validatePutProvince };
