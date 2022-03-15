const categoryRouter = require("express").Router();
const { CategoriesController } = require("../controllers");
const { validatePostRoles, validatePutRoles } = require("../middleware/Roles");

// GET
categoryRouter.get("/", CategoriesController.findMany);
categoryRouter.get("/:id", CategoriesController.findOneById);

// PUT
categoryRouter.put("/:id", validatePutRoles, CategoriesController.updateOneById);

// POST
categoryRouter.post("/", validatePostRoles, CategoriesController.createOne);

// DELETE
categoryRouter.delete("/:id", CategoriesController.removeOneById);

module.exports = categoryRouter;
