const booksRouter = require("express").Router();
const { BooksController } = require("../controllers");
const { validateCreateBook, validatePutBook } = require("../middleware/Books");

booksRouter.get("/", BooksController.findMany);
booksRouter.get("/:id", BooksController.findOneById);

booksRouter.put("/:id", validatePutBook, BooksController.updateOneById);

booksRouter.post("/", validateCreateBook, BooksController.createOne);

booksRouter.delete("/:id", BooksController.deleteOneById);

module.exports = booksRouter;
