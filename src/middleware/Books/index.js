const { Books } = require("../../models");

const validateCreateBook = async (req, res, next) => {
  const { img_link, link } = req.body;
  if (!img_link || !link || !req.files.length) {
    return res.status(422).send();
  }
  req.book = { img_link, link, filename: req.files[0].filename };
  return next();
};

const validatePutBook = async (req, res, next) => {
  const { id } = req.params;
  const { img_link, link } = req.body;
  const [[book]] = await Books.findOneById(id);
  if (!book) return res.status(404).send();
  if (!img_link && !link) return res.status(422).send();
  const newBook = {};
  if (img_link) newBook.img_link = img_link;
  if (link) newBook.link = link;
  req.book = newBook;
  return next();
};

module.exports = { validateCreateBook, validatePutBook };
