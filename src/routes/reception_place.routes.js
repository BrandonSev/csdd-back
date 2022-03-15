const receptionPlaceRouter = require("express").Router();

const { ReceptionPlaceController } = require("../controllers");
// const { validatePostReceptionPlace } = require("../middleware/ReceptionPlace");

// GET
receptionPlaceRouter.get("/", ReceptionPlaceController.findMany);
receptionPlaceRouter.get("/:id", ReceptionPlaceController.findOneById);

// POST
receptionPlaceRouter.post("/", ReceptionPlaceController.createOne);

// PUT
receptionPlaceRouter.put("/:id", ReceptionPlaceController.updateOneById);

// DELETE
receptionPlaceRouter.delete("/:id", ReceptionPlaceController.deleteOneById);

module.exports = receptionPlaceRouter;
