const mainRouter = require("express").Router();
const rolesRouter = require("./roles.routes");
const usersRouter = require("./users.routes");
const statusRouter = require("./status.routes");
const receptionPlaceRouter = require("./reception_place.routes");
const assetsRouter = require("./assets.routes");
const adoptionPlaceRouter = require("./adoption_place.routes");
const provinceRouter = require("./province.routes");
const roomRouter = require("./room.routes");
const underStatusRouter = require("./under_status.routes");
const messagesRouter = require("./message.routes");

mainRouter.use("/users", usersRouter);
mainRouter.use("/roles", rolesRouter);
mainRouter.use("/status", statusRouter);
mainRouter.use("/receptionPlace", receptionPlaceRouter);
mainRouter.use("/assets", assetsRouter);
mainRouter.use("/adoptionPlace", adoptionPlaceRouter);
mainRouter.use("/province", provinceRouter);
mainRouter.use("/rooms", roomRouter);
mainRouter.use("/underStatus", underStatusRouter);
mainRouter.use("/messages", messagesRouter);

module.exports = mainRouter;
