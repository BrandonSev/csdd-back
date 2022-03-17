const eventsRouter = require("express").Router();
const { EventsController } = require("../controllers");
const { validatePostEvents, validatePutEvents } = require("../middleware/Events");

// GET
eventsRouter.get("/", EventsController.findMany);
eventsRouter.get("/:id", EventsController.findOneById);

// PUT
eventsRouter.put("/:id", validatePutEvents, EventsController.updateOneById);

// POST
eventsRouter.post("/", validatePostEvents, EventsController.createOne);

// DELETE
eventsRouter.delete("/:id", EventsController.removeOneById);

module.exports = eventsRouter;
