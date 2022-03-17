const jobOffersRouter = require("express").Router();
const { JobOffersController } = require("../controllers");
const { validatePostJobOffers, validatePutJobOffers } = require("../middleware/Roles");

// GET
jobOffersRouter.get("/", JobOffersController.findMany);
jobOffersRouter.get("/:id", JobOffersController.findOneById);

// PUT
jobOffersRouter.put("/:id", validatePutJobOffers, JobOffersController.updateOneById);

// POST
jobOffersRouter.post("/", validatePostJobOffers, JobOffersController.createOne);

// DELETE
jobOffersRouter.delete("/:id", JobOffersController.removeOneById);

module.exports = jobOffersRouter;
