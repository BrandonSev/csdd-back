const { Events } = require("../../models");

const validatePostEvents = async (req, res, next) => {
  const { filename, event_date, description, event_link } = req.body;
  if (!filename && !event_date && !description && !event_link) return res.status(400).json({ message: "Fournissez des valeurs correctes" });
  try {
    const [events] = await Events.findOneByName(filename);
    if (events.length) return res.status(422).json({ message: "Un évènement sous ce nom existe déjà" });
    req.Events = { filename, event_date, description, event_link };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutEvents = async (req, res, next) => {
  const { id } = req.params;
  const { filename, event_date, description, event_link } = req.body;
  if (!filename || !event_date || !description || !event_link) return res.status(422).json({ message: "Fournissez des valeurs correctes" });
  const [[events]] = await Events.findOneById(id);
  if (!events) return res.status(404).send("Evènement introuvable");
  req.Events = { filename, event_date, description, event_link };
  return next();
};

module.exports = { validatePostEvents, validatePutEvents };
