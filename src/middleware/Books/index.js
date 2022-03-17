const { Books } = require("../../models");

const validateCreateBook = async (req, res, next) => {
  // je vérifie les champs obligatoires
  const { filename, link } = req.body;
  const [[book]] = await Books.findOneByName(filename);
  if (book) return res.status(422).send({ message: "Un livre sous ce nom existe déjà" });
  if (!filename && !link) return res.status(422).send();
  req.book = { filename, link };
  return next();
};

const validatePutBook = async (req, res, next) => {
  const { id } = req.params;
  const { filename } = req.body;
  const [[book]] = await Books.findOneByName(filename);
  if (book) return res.status(422).send({ message: "Un livre sous ce nom existe déjà" });
  const [[bookId]] = await Books.findOneById(id);
  if (!bookId) return res.status(404).send();
  req.book = { filename };
  return next();
};

module.exports = { validateCreateBook, validatePutBook };
