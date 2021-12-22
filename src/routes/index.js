const mainRouter = require("express").Router();
const rolesRouter = require("./roles.routes");
const usersRouter = require("./users.routes");

mainRouter.use("/users", usersRouter);
mainRouter.use("/roles", rolesRouter);

module.exports = mainRouter;
