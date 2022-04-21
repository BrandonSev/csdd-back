const { Books } = require("../../models");

const validateCreateBook = async (req, res, next) => {
  const { img_link, link, title } = req.body;
  if (!link || !title || !req.files.length) {
    return res.status(422).send();
  }
  req.book = { link, filename: req.files[0].filename, title };
  if (img_link) req.book.img_link = img_link;
  return next();
};

const validatePutBook = async (req, res, next) => {
  const { id } = req.params;
  const { img_link, link, title } = req.body;
  const [[book]] = await Books.findOneById(id);
  if (!book) return res.status(404).send();
  if (!img_link && !link && !title && !req.files[0].length) return res.status(422).send();
  const newBook = {};
  if (img_link) newBook.img_link = img_link;
  if (link) newBook.link = link;
  if (title) newBook.title = title;
  if (req.files[0]) {
    newBook.filename = req.files[0].filename;
    fs.unlink(`assets/${book.filename}`, (err) => {
      if (err) return res.status(500).send(err);
      return true;
    });
  }
  req.book = newBook;
  return next();
};

module.exports = { validateCreateBook, validatePutBook };
