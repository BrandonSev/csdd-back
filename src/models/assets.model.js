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
    const sql = "INSERT INTO assets SET name=?";
    return connection.promise().query(sql, [assets]);
  }

  static updateOneById(newAssets, id) {
    const sql = "UPDATE assets SET ? WHERE id=?";
    return connection.promise().query(sql, [newAssets, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM assets WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Assets;
