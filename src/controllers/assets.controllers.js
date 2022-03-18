const multer = require("multer");
const fs = require("fs");
const { Assets } = require("../models");

const findMany = async (req, res) => {
  try {
    const [result] = await Assets.findMany();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await Assets.findOneById(id);
    if (!result) return res.status(404).send();
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const { file_date, roleId, categoryId } = req.body;
    const arr = req.files.map(async (file) => {
      const [newAsset] = await Assets.createOne({
        filename: file.filename,
        type: file.filename.split(".")[1],
        file_date,
      });
      roleId.map(async (role) => {
        await Assets.createAssetsWithRoles(newAsset.insertId, role);
      });
      categoryId.map(async (category) => {
        await Assets.createAssetsWithCategories(newAsset.insertId, category);
      });
      const [[asset]] = await Assets.findOneById(newAsset.insertId);
      return asset;
    });
    const result = await Promise.all(arr);
    return res.status(201).send(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { roleId, categoryId } = req.body;
    const { id } = req.params;
    if (roleId) {
      await Assets.removeOlderAssetsRoles(id);
      roleId.map(async (role) => {
        await Assets.updateAssetsRoles(id, role);
      });
    }
    if (categoryId) {
      await Assets.removeOlderAssetsCategory(id);
      categoryId.map(async (category) => {
        await Assets.updateAssetsCategory(id, category);
      });
    }
    await Assets.updateOneById(req.newAsset, id);
    const [[newRoles]] = await Assets.findOneById(id);
    return res.status(200).send(newRoles);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const removeOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await Assets.findOneById(id);
    if (!result.length) return res.status(404).send();
    await Assets.removeOlderAssetsCategory(id);
    await Assets.removeOlderAssetsRoles(id);
    await Assets.removeOneById(id);
    fs.unlink(`assets/${result[0].filename}`, (err) => {
      if (err) return res.status(500).send(err);
      return true;
    });
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const uploadAssets = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (_, file, cb) => {
      cb(null, "assets");
    },
    filename: (_, file, cb) => {
      cb(null, `${new Date().getTime()}-${file.originalname}`);
    },
  });
  const upload = multer({ storage }).array("assets", 10);

  return upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).send(err.message);
    }
    if (err) {
      return res.status(500).send(err.message);
    }
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    return next();
  });
};

module.exports = { findMany, findOneById, createOne, updateOneById, removeOneById, uploadAssets };
