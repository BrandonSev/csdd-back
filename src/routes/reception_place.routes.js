const receptionPlaceRouter = require("express").Router();

const { ReceptionPlaceController } = require("../controllers");
// const { validatePostReceptionPlace } = require("../middleware/ReceptionPlace");

// GET
receptionPlaceRouter.get("/", ReceptionPlaceController.findMany);
receptionPlaceRouter.get("/:id", ReceptionPlaceController.findOneById);

// POST
receptionPlaceRouter.post("/", ReceptionPlaceController.createOne);

// DELETE
receptionPlaceRouter.delete("/:id", ReceptionPlaceController.deleteOneById);

module.exports = receptionPlaceRouter;
