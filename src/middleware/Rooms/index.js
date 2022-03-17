const { Room } = require("../../models");

const validateCreateRoom = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(422).json({ message: "Fournissez des valeurs correct" });
  try {
    const [role] = await Room.findOneByName(name);
    if (role.length) return res.status(422).json({ message: "Une chambre sous ce nom existe déjà" });
    req.newRoom = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutRoom = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const [roles] = await Room.findOneById(id);
  if (!roles.length) return res.status(404).send();
  if (!name) return res.status(422).json({ message: "Fournissez des valeurs correct" });
  try {
    const [role] = await Room.findOneByName(name);
    if (role.length) return res.status(422).json({ message: "Une chambre sous ce nom existe déjà" });
    req.newRoom = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validateCreateRoom, validatePutRoom };
