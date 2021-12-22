const mainRouter = require("express").Router();
const rolesRouter = require("./roles.routes");
const usersRouter = require("./users.routes");
const statusRouter = require("./status.routes");
const receptionPlaceRouter = require("./reception_place.routes");

mainRouter.use("/users", usersRouter);
mainRouter.use("/roles", rolesRouter);
mainRouter.use("/status", statusRouter);
mainRouter.use("/receptionPlace", receptionPlaceRouter);

module.exports = mainRouter;
