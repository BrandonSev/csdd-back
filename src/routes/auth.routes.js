const authRouter = require("express").Router();
const { AuthController } = require("../controllers");

authRouter.post("/login", AuthController.signIn);
authRouter.post("/logout", AuthController.logout);

module.exports = authRouter;
