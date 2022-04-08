const usersRouter = require("express").Router();

const { UserController } = require("../controllers");
const { validatePutUser, validatePostUser, checkUserQuery, checkAdmin, isAuthenticated, requestCreateUser } = require("../middleware/User");

// GET
usersRouter.get("/", checkUserQuery, UserController.findMany);
usersRouter.get("/:id", UserController.findOneById);

// POST
usersRouter.post("/", validatePostUser, UserController.createOne, requestCreateUser, UserController.findOneById);

// PUT
usersRouter.put("/:id", isAuthenticated, validatePutUser, checkAdmin, UserController.updateOneById);

// DELETE
usersRouter.delete("/:id", UserController.removeOneById);

module.exports = usersRouter;
