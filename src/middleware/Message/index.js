const { Message } = require("../../models");

const validatePostMessage = async (req, res, next) => {
  const { message, users_id } = req.body;
  if (!message && !users_id) return res.status(422).json({ message: "Fournissez des valeurs correct" });
  req.newMessage = { message, users_id };
  return next();
};

const validatePutMessage = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const [messages] = await Message.findOneById(id);
  if (!messages.length) return res.status(404).send();
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [message] = await Message.findOneByName(name);
    if (message.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    req.nexMessage = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validatePostMessage, validatePutMessage };
