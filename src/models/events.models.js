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

  static findOneByName(name) {
    const sql = "SELECT * FROM events WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(name) {
    const sql = "INSERT INTO events SET name=?";
    return connection.promise().query(sql, [name]);
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
