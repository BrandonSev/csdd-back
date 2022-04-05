const authRouter = require("express").Router();
const { AuthController } = require("../controllers");
const send = require("../controllers/mails.controller");

authRouter.post("/login", AuthController.signIn);
authRouter.post("/logout", AuthController.logout);

authRouter.post("/forgot-password", AuthController.forgotPassword, send);
authRouter.post("/reset-password/:userId/:token", AuthController.resetPassword);

module.exports = authRouter;
