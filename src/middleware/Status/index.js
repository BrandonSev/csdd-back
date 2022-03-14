const { Status, Roles } = require("../../models");

const validatePostStatus = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
    const [status] = await Status.findOneByName(name);
    if (status.length) return res.status(422).json({ message: "Un status sous ce nom existe déjà" });
    next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutStatus = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const [ status ] = await Roles.findOneById(id);
  if (!status.length) return res.status(404).send();
  if (!name) return res.status(400).json({ message: "Fournissez des valeur correct"});
  try {
    const [role] =  await Roles.findOneByName(name);
    if (role.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    req.newStatus = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
module.exports = { validatePostStatus, validatePutStatus };
