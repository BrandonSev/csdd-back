const provinceRouter = require("express").Router();

const { ProvinceController } = require("../controllers");
const { validateCreateProvince, validatePutProvince } = require("../middleware/Province");

provinceRouter.get("/", ProvinceController.findMany);
provinceRouter.get("/:id", ProvinceController.findOneById);

provinceRouter.post("/", validateCreateProvince, ProvinceController.createOne);

provinceRouter.put("/:id", validatePutProvince, ProvinceController.updateOneById);

provinceRouter.delete("/:id", ProvinceController.deleteOneById);

module.exports = provinceRouter;
