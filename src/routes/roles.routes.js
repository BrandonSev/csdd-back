const { RolesController } = require("../controllers");
const { validatePostRoles, validatePutRoles } = require("../middleware/Roles");
const rolesRouter = require("express").Router();

// GET
rolesRouter.get("/", RolesController.findMany);
rolesRouter.get("/:id", RolesController.findOneById);

// PUT
rolesRouter.put("/:id", validatePutRoles, RolesController.updateOneById);

// POST
rolesRouter.post("/", validatePostRoles, RolesController.createOne);

// DELETE
rolesRouter.delete("/:id", RolesController.removeOneById);

module.exports = rolesRouter;
