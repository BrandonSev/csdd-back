const adoptionPlaceRouter = require("express").Router();

const { AdoptionPlaceController } = require("../controllers");

adoptionPlaceRouter.get("/", AdoptionPlaceController.findMany);
adoptionPlaceRouter.get("/:id", AdoptionPlaceController.findOneById);

adoptionPlaceRouter.post("/", AdoptionPlaceController.createOne);

adoptionPlaceRouter.delete("/:id", AdoptionPlaceController.deleteOneById);

module.exports = adoptionPlaceRouter;
