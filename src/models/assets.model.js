const { connection } = require("../../db-connection");

class Assets {
  static findMany() {
    const sql = "SELECT * FROM assets";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql =
      "SELECT a.*, GROUP_CONCAT(r.name, '') as roles, GROUP_CONCAT(c.name, '') AS categories FROM assets a LEFT JOIN roles_assets ra on a.id=ra.assets_id LEFT JOIN roles r ON r.id=ra.roles_id LEFT JOIN assets_category ac ON ac.assets_id=a.id LEFT JOIN categories c ON c.id=ac.categories_id WHERE a.id=?";
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
    return connection.promise().query(sql, [id, category]);
  }
}

module.exports = Assets;
