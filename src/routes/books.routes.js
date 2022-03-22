const booksRouter = require("express").Router();
const { BooksController, AssetsController } = require("../controllers");
const { validateCreateBook, validatePutBook } = require("../middleware/Books");

booksRouter.get("/", BooksController.findMany);
booksRouter.get("/:id", BooksController.findOneById);

booksRouter.put("/:id", AssetsController.uploadAssets, validatePutBook, BooksController.updateOneById);

booksRouter.post("/", AssetsController.uploadAssets, validateCreateBook, BooksController.createOne);

booksRouter.delete("/:id", BooksController.deleteOneById);

module.exports = booksRouter;
