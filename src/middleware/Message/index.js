const validatePostMessage = async (req, res, next) => {
  const { message, users_id } = req.body;
  if (!message && !users_id) return res.status(422).json({ message: "Fournissez des valeurs correct" });
  req.newMessage = { message, users_id };
  return next();
};

module.exports = { validatePostMessage };
