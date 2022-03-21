const { connection } = require("../../db-connection");

class AssetsCategory {
  static findMany() {
    const sql = "SELECT * FROM assets_category";
    return connection.promise().query(sql);
  }

  static findOneById(assetId, categoryId) {
    const sql = "SELECT * FROM assets_category WHERE assets_id=? AND categories_id=?";
    return connection.promise().query(sql, [assetId, categoryId]);
  }

  static createOne(values) {
    const sql = "INSERT INTO assets_category SET ?";
    return connection.promise().query(sql, [values]);
  }

  static updateOneById(newValue, assetId, categoryId) {
    const sql = "UPDATE assets_category SET ? WHERE assets_id=? AND categories_id=?";
    return connection.promise().query(sql, [newValue, assetId, categoryId]);
  }

  static removeByAssetId(assetId) {
    const sql = "DELETE FROM assets_category WHERE assets_id=?";
    return connection.promise().query(sql, [assetId]);
  }

  static removeByCategoryId(assetId, categoryId) {
    const sql = "DELETE FROM assets_category WHERE categories_id=?";
    return connection.promise().query(sql, [categoryId]);
  }
}

module.exports = AssetsCategory;
