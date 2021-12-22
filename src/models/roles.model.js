const { connection } = require("../../db-connection");

class Roles {
  static findMany() {
    const sql = "SELECT * FROM roles";
    return connection.promise().query(sql);
  }
  static findOneById(id) {
    const sql = "SELECT * FROM users WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
  static createOne(name) {
    const sql = "INSERT INTO roles SET name=?";
    return connection.promise().query(sql, [name]);
  }
}

module.exports = Roles;
