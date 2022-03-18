const { connection } = require("../../db-connection");

class AssetsCategory {
  static findMany() {
    const sql = "SELECT * FROM assets_category";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM assets_category WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM assets_category WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(name) {
    const sql = "INSERT INTO assets_category SET name=?";
    return connection.promise().query(sql, [name]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE assets_category SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM assets_category WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = AssetsCategory;
