const provinceRouter = require("express").Router();

const { ProvinceController } = require("../controllers");

provinceRouter.get("/", ProvinceController.findMany);
provinceRouter.get("/:id", ProvinceController.findOneById);

provinceRouter.post("/", ProvinceController.createOne);

provinceRouter.put("/:id", ProvinceController.updateOneById);

provinceRouter.delete("/:id", ProvinceController.deleteOneById);

module.exports = provinceRouter;
