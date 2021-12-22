const { RolesController } = require("../controllers");
const rolesRouter = require("express").Router();

// GET
rolesRouter.get("/", RolesController.findMany);

// POST
rolesRouter.post("/", RolesController.createOne);
module.exports = rolesRouter;
