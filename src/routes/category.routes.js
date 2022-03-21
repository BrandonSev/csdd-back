const categoryRouter = require("express").Router();
const { CategoryController } = require("../controllers");
const { validatePutCategory, validatePostCategory } = require("../middleware/Category");

// GET
categoryRouter.get("/", CategoryController.findMany);
categoryRouter.get("/:id", CategoryController.findOneById);

// PUT
categoryRouter.put("/:id", validatePutCategory, CategoryController.updateOneById);

// POST
categoryRouter.post("/", validatePostCategory, CategoryController.createOne);

// DELETE
categoryRouter.delete("/:id", CategoryController.removeOneById);

module.exports = categoryRouter;
