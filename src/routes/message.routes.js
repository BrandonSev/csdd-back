const messageRouter = require("express").Router();
const { MessageController } = require("../controllers");
const { validatePostMessage, validatePutMessage } = require("../middleware/Roles");

// GET
messageRouter.get("/", MessageController.findMany);
messageRouter.get("/:id", MessageController.findOneById);

// PUT
messageRouter.put("/:id", validatePutMessage, MessageController.updateOneById);

// POST
messageRouter.post("/", validatePostMessage, MessageController.createOne);

// DELETE
messageRouter.delete("/:id", MessageController.removeOneById);

module.exports = messageRouter;
