const statusRouter = require("express").Router();

const { StatusController } = reuire("../controllers");
const { validatePostStatus } = require("../middleware/Status");

//GET 
statusRouter.get("/", StatusController.findMany);
statusRouter.get("/:id" , StatusController.findOneById);

//POST
statusRouter.post("/", validatePostStatus, StatusController.createOne);

//DELETE
statusRouter.delete("/:id", StatusController.removeOneById);

module.exports = statusRouter;