const { Events } = require("../../models");

const validatePostEvents = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [events] = await Events.findOneByName(name);
    if (events.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutEvents = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const [events] = await Events.findOneById(id);
  if (!events.length) return res.status(404).send();
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [event] = await Events.findOneByName(name);
    if (event.length) return res.status(422).json({ message: "Un evènements sous ce nom existe déjà" });
    req.newEvents = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validatePostEvents, validatePutEvents };
