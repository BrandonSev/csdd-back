const { Categories } = require("../../models");

const validatePostRoles = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [category] = await Categories.findOneByName(name);
    if (category.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutRoles = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const [category] = await Categories.findOneById(id);
  if (!category.length) return res.status(404).send();
  if (!name) return res.status(400).json({ message: "Fournissez des valeurs correct" });
  try {
    const [categories] = await Categories.findOneByName(name);
    if (categories.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    req.newcategory = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validatePostRoles, validatePutRoles };
