const { Category } = require("../../models");

const validatePostCategory = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(422).json({ message: "Fournissez des valeurs correct" });
  try {
    const [category] = await Category.findOneByName(name);
    if (category.length) return res.status(422).json({ message: "Un rôle sous ce nom existe déjà" });
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const validatePutCategory = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const [category] = await Category.findOneById(id);
  if (!category.length) return res.status(404).send();
  if (!name) return res.status(422).json({ message: "Fournissez des valeurs correct" });
  try {
    const [categories] = await Category.findOneByName(name);
    if (categories.length) return res.status(422).json({ message: "Une catégorie sous ce nom existe déjà" });
    req.newCategory = { name };
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validatePostCategory, validatePutCategory };
