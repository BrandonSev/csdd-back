const receptionPlaceRouter = require("express").Router();

const { ReceptionPlaceController } = require("../controllers");
const { validateCreateReceptionPlace, validatePutReceptionPlace } = require("../middleware/ReceptionPlace");

// GET
receptionPlaceRouter.get("/", ReceptionPlaceController.findMany);
receptionPlaceRouter.get("/:id", ReceptionPlaceController.findOneById);

// POST
receptionPlaceRouter.post("/", validateCreateReceptionPlace, ReceptionPlaceController.createOne);

// PUT
receptionPlaceRouter.put("/:id", validatePutReceptionPlace, ReceptionPlaceController.updateOneById);

// DELETE
receptionPlaceRouter.delete("/:id", ReceptionPlaceController.deleteOneById);

module.exports = receptionPlaceRouter;
