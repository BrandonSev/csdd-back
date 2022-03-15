const statusRouter = require("express").Router();
const { StatusController } = require("../controllers");
const { validatePostStatus, validatePutStatus } = require("../middleware/Status");

// GET
statusRouter.get("/", StatusController.findMany);
statusRouter.get("/:id", StatusController.findOneById);

// PUT
statusRouter.put("/:id", validatePutStatus, StatusController.updateOneById);

// POST
statusRouter.post("/", validatePostStatus, StatusController.createOne);

// DELETE
statusRouter.delete("/:id", StatusController.removeOneById);

module.exports = statusRouter;
