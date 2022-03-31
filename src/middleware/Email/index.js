const { User } = require("../../models");

const checkEmailExist = async (req, res, next) => {
  const [[user]] = await User.findOneByEmail(req.body.email);
  if (!user) return res.status(404).send();
  return next();
};

module.exports = { checkEmailExist };
