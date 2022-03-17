const { UnderStatus } = require("../../models");

const validatePostUnderStatus = async (req, res, next) => {
  const { name, status_id } = req.body;
  if (!name && !status_id) return res.status(422).json({ message: "Fournissez des valeur correct" });
  try {
    const [under_status] = await UnderStatus.findOneByName(name);
    if (under_status.length) return res.status(422).json({ message: "un sous-status sous ce nom existe deja" });
    req.newUnderStatus = { name, status_id };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutUnderStatus = async (req, res, next) => {
  const { name, status_id } = req.body;
  const { id } = req.params;
  if (!name || !status_id) return res.status(422).json({ message: "Fournissez des valeurs correctes" });
  try {
    const [[under_status]] = await UnderStatus.findOneById(id);
    if (!under_status) return res.status(404).send();
    const [underStatusName] = await UnderStatus.findOneByName(name);
    if (underStatusName) return res.status(422).json({ message: "un sous-status sous ce nom existe deja" });
    req.newUnderStatus = { name, status_id };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validatePostUnderStatus, validatePutUnderStatus };
