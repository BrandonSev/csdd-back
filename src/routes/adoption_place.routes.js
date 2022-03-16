const adoptionPlaceRouter = require("express").Router();

const { AdoptionPlaceController } = require("../controllers");
const { validateCreateAdoptionPlace, validatePutAdoptionPlace } = require("../middleware/AdoptionPlace");

adoptionPlaceRouter.get("/", AdoptionPlaceController.findMany);
adoptionPlaceRouter.get("/:id", AdoptionPlaceController.findOneById);

adoptionPlaceRouter.post("/", validateCreateAdoptionPlace, AdoptionPlaceController.createOne);
adoptionPlaceRouter.put("/:id", validatePutAdoptionPlace, AdoptionPlaceController.updateOneById);

adoptionPlaceRouter.delete("/:id", AdoptionPlaceController.deleteOneById);

module.exports = adoptionPlaceRouter;
