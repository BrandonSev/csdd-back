const messageRouter = require("express").Router();
const { MessageController } = require("../controllers");
const { validatePostMessage } = require("../middleware/Message");

// GET
messageRouter.get("/", MessageController.findMany);
messageRouter.get("/:id", MessageController.findOneById);

// POST
messageRouter.post("/", validatePostMessage, MessageController.createOne);

// DELETE
messageRouter.delete("/:id", MessageController.removeOneById);

module.exports = messageRouter;
