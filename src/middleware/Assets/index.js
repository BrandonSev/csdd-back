const fs = require("fs");
const { Assets } = require("../../models");

const validateCreateAssets = (req, res, next) => {
  const { file_date, roleId, categoryId } = req.body;
  if ((!file_date && !roleId && !categoryId) || !req.files.length) return res.status(422).send();
  return next();
};

const validatePutAssets = async (req, res, next) => {
  const { file_date } = req.body;
  const { id } = req.params;
  const [[asset]] = await Assets.findOneById(id);
  if (!asset) return res.status(404).send();
  let newAsset = { file_date: asset.file_date };
  if (file_date) newAsset.file_date = file_date;
  if (req.files.length) {
    fs.unlink(`assets/${asset.filename}`, (err) => {
      if (err) return res.status(500).send(err);
      return true;
    });
    newAsset.filename = req.files[0].filename;
    newAsset = { ...newAsset, type: req.files[0].filename.split(".")[0] };
    newAsset = { ...newAsset, file_date: file_date ?? asset.file_date };
  }
  req.newAsset = newAsset;
  return next();
};

module.exports = { validateCreateAssets, validatePutAssets };
