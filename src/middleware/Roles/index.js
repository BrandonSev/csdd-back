const { Roles } = require("../../models");

const validatePostRoles = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [role] = await Roles.findOneByName(name);
    if (role.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutRoles = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [role] = await Roles.findOneByName(name);
    if (role.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validatePostRoles, validatePutRoles };