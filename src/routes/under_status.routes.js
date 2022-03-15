const under_statusRouter = require("express").Router();
const { Under_statusController } = require("../controllers");
const { validatePostUnder_status, validatePutUnder_status } = require("../middleware/under_status");

// GET
under_statusRouter.get("/", Under_statusController.findMany);
under_statusRouter.get("/:id", Under_statusController.findOneById);

// PUT
under_statusRouter.put("/:id", validatePutUnder_status, Under_statusController.updateOneById);

// POST
under_statusRouter.post("/", validatePostUnder_status, Under_statusController.createOne);

// DELETE
under_statusRouter.delete("/:id", Under_statusController.removeOneById);

module.exports = under_statusRouter;
