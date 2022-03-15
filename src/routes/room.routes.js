const roomRouter = require("express").Router();

const { RoomController } = require("../controllers");

roomRouter.get("/", RoomController.findMany);
roomRouter.get("/:id", RoomController.findOneById);

roomRouter.post("/", RoomController.createOne);

roomRouter.put("/:id", RoomController.updateOneById);

roomRouter.delete("/:id", RoomController.deleteOneById);

module.exports = roomRouter;
