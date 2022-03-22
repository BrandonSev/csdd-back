const { Events } = require("../../models");

const validatePostEvents = async (req, res, next) => {
  const { event_date, description } = req.body;
  if (!event_date || !description || !req.files.length) return res.status(422).json();
  req.event = { event_date, description, filename: req.files[0].filename };
  return next();
};

const validatePutEvents = async (req, res, next) => {
  const { id } = req.params;
  const { event_date, description } = req.body;
  if (!event_date && !description && !req.files.length) return res.status(422).json();
  const [[events]] = await Events.findOneById(id);
  if (!events) return res.status(404).send("Evènement introuvable");
  const event = {};
  if (event_date) event.event_date = event_date;
  if (description) event.description = description;
  if (req.files[0]) event.filename = req.files[0].filename;
  req.event = event;
  return next();
};

module.exports = { validatePostEvents, validatePutEvents };
