const roomRouter = require("express").Router();

const { RoomController } = require("../controllers");
const { validateCreateRoom, validatePutRoom } = require("../middleware/Rooms");

roomRouter.get("/", RoomController.findMany);
roomRouter.get("/:id", RoomController.findOneById);

roomRouter.post("/", validateCreateRoom, RoomController.createOne);

roomRouter.put("/:id", validatePutRoom, RoomController.updateOneById);

roomRouter.delete("/:id", RoomController.deleteOneById);

module.exports = roomRouter;
