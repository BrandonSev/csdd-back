const assetsRouter = require("express").Router();
const { AssetsController } = require("../controllers");

assetsRouter.get("/", AssetsController.findMany);
assetsRouter.get("/:id", AssetsController.findOneById);

assetsRouter.post("/", AssetsController.createOne);

assetsRouter.put("/:id", AssetsController.updateOneById);

assetsRouter.delete("/:id", AssetsController.removeOneById);

module.exports = assetsRouter;
