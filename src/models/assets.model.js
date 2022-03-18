const { connection } = require("../../db-connection");

class Assets {
  static findMany() {
    const sql = "SELECT * FROM assets";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM assets WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM assets WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(assets) {
    const sql = "INSERT INTO assets SET ?";
    return connection.promise().query(sql, [assets]);
  }

  static createAssetsWithRoles(assets, roleId) {
    const sql = `INSERT INTO roles_assets SET assets_id=?, roles_id=?`;
    return connection.promise().query(sql, [assets, roleId]);
  }

  static createAssetsWithCategories(assets, categoryId) {
    const sql = `INSERT INTO assets_category SET assets_id=?, categories_id=?`;
    return connection.promise().query(sql, [assets, categoryId]);
  }

  static updateOneById(newAssets, id) {
    const sql = "UPDATE assets SET ? WHERE id=?";
    return connection.promise().query(sql, [newAssets, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM assets WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static removeOlderAssetsRoles(id) {
    const sql = `DELETE FROM roles_assets WHERE assets_id=?;`;
    return connection.promise().query(sql, [id]);
  }

  static updateAssetsRoles(id, role) {
    const sql = `INSERT INTO roles_assets SET assets_id=?, roles_id=?;`;
    return connection.promise().query(sql, [id, role]);
  }

  static removeOlderAssetsCategory(id) {
    const sql = "DELETE FROM assets_category WHERE assets_id=?;";
    return connection.promise().query(sql, [id]);
  }

  static updateAssetsCategory(id, category) {
    const sql = `INSERT INTO assets_category SET assets_id=?, categories_id=?;`;
    return connection.promise().query(sql, [id, id, category]);
  }
}

module.exports = Assets;
