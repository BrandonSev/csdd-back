const underStatusRouter = require("express").Router();
const { UnderStatusController } = require("../controllers");
const { validatePostUnderStatus, validatePutUnderStatus } = require("../middleware/under_status");

// GET
underStatusRouter.get("/", UnderStatusController.findMany);
underStatusRouter.get("/:id", UnderStatusController.findOneById);

// PUT
underStatusRouter.put("/:id", validatePutUnderStatus, UnderStatusController.updateOneById);

// POST
underStatusRouter.post("/", validatePostUnderStatus, UnderStatusController.createOne);

// DELETE
underStatusRouter.delete("/:id", UnderStatusController.removeOneById);

module.exports = underStatusRouter;
