const statusRouter = require("express").Router();

const { StatusController } = require("../controllers");
const { validatePostStatus } = require("../middleware/Status");
// const { validatePostStatus } = require("../middleware/Status");

//GET
statusRouter.get("/", StatusController.findMany);
statusRouter.get("/:id", StatusController.findOneById);

//POST
statusRouter.post("/", validatePostStatus, StatusController.createOne);

//DELETE
statusRouter.delete("/:id", StatusController.removeOneById);

module.exports = statusRouter;
