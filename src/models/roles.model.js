const { connection } = require("../../db-connection");

class Roles {
  static findMany() {
    const sql = "SELECT * FROM roles";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM roles WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM roles WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(name) {
    const sql = "INSERT INTO roles SET name=?";
    return connection.promise().query(sql, [name]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE roles SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM roles WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Roles;
