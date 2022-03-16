const mainRouter = require("express").Router();
const rolesRouter = require("./roles.routes");
const usersRouter = require("./users.routes");
const statusRouter = require("./status.routes");
const receptionPlaceRouter = require("./reception_place.routes");
const assetsRouter = require("./assets.routes");
const adoptionPlaceRouter = require("./adoption_place.routes");
const provinceRouter = require("./province.routes");
const roomRouter = require("./room.routes");
const jobOffersRouter = require("./job_offers.routes");

mainRouter.use("/users", usersRouter);
mainRouter.use("/roles", rolesRouter);
mainRouter.use("/status", statusRouter);
mainRouter.use("/receptionPlace", receptionPlaceRouter);
mainRouter.use("/assets", assetsRouter);
mainRouter.use("/adoptionPlace", adoptionPlaceRouter);
mainRouter.use("/province", provinceRouter);
mainRouter.use("/room", roomRouter);
mainRouter.use("/job_offers", jobOffersRouter);

module.exports = mainRouter;
