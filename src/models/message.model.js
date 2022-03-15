const { connection } = require("../../db-connection");

class Message {
  static findMany() {
    const sql = "SELECT * FROM messages";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM messages WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM messages WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(name) {
    const sql = "INSERT INTO messages SET name=?";
    return connection.promise().query(sql, [name]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE messages SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM Message WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Message;
