const usersRouter = require("express").Router();

const { UserController } = require("../controllers");
const { validatePutUser, validatePostUser, checkUserQuery } = require("../middleware/User");

// GET
usersRouter.get("/", checkUserQuery, UserController.findMany);
usersRouter.get("/:id", UserController.findOneById);

// POST
usersRouter.post("/", validatePostUser, UserController.createOne);

// PUT
usersRouter.put("/:id", validatePutUser, UserController.updateOneById);

// DELETE
usersRouter.delete("/:id", UserController.removeOneById);

module.exports = usersRouter;
