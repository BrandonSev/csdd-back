const assetsRouter = require("express").Router();
const { AssetsController } = require("../controllers");
const { validateCreateAssets, validatePutAssets } = require("../middleware/Assets");

assetsRouter.get("/", AssetsController.findMany);
assetsRouter.get("/:id", AssetsController.findOneById);

assetsRouter.post("/", AssetsController.uploadAssets, validateCreateAssets, AssetsController.createOne);

assetsRouter.put("/:id", AssetsController.uploadAssets, validatePutAssets, AssetsController.updateOneById);

assetsRouter.delete("/:id", AssetsController.removeOneById);

module.exports = assetsRouter;
