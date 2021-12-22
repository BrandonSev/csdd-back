const { Status } = require("../../models");

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

module.exports = { validatePostStatus };
