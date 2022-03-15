const { connection } = require("../../db-connection");

class Under_status {
  static findMany() {
    const sql = "SELECT * FROM under_status";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM under_status WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM under_status WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(name) {
    const sql = "INSERT INTO under_status SET name=?";
    return connection.promise().query(sql, [name]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE under_status SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM under_status WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Under_status;
