const { connection } = require("../../db-connection");

class Events {
  static findMany() {
    const sql = "SELECT * FROM events";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM events WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(filename) {
    const sql = "SELECT * FROM events WHERE filename=?";
    return connection.promise().query(sql, [filename]);
  }

  static createOne(filename) {
    const sql = "INSERT INTO events SET ?";
    return connection.promise().query(sql, [filename]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE events SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM events WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Events;
