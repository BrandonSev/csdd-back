const mainRouter = require("express").Router();
const rolesRouter = require("./roles.routes");
const usersRouter = require("./users.routes");
const statusRouter = require("./status.routes");
const receptionPlaceRouter = require("./reception_place.routes");
const adoptionPlaceRouter = require("./adoption_place.routes");
const provinceRouter = require("./province.routes");
const roomRouter = require("./room.routes");

mainRouter.use("/users", usersRouter);
mainRouter.use("/roles", rolesRouter);
mainRouter.use("/status", statusRouter);
mainRouter.use("/receptionPlace", receptionPlaceRouter);
mainRouter.use("/adoptionPlace", adoptionPlaceRouter);
mainRouter.use("/province", provinceRouter);
mainRouter.use("/room", roomRouter);

module.exports = mainRouter;
