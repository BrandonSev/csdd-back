const mainRouter = require("express").Router();

const send = require("../controllers/mails.controller");
const { checkEmailExist } = require("../middleware/Email");

// POST
mainRouter.post("/", checkEmailExist, send);

module.exports = mainRouter;
