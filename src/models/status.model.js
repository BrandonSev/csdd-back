const { connection } = require("../../db-connection");

class Status {
  static findMany() {
    const sql = "SELECT * FROM status";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM status WHERE id=?";
    return connection.promise().query(sql, [id]); // [id]= se que l'on attends en resultat
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM status WHERE name=?";
    return connection.promise().query(sql, [name]); // [id]= se que l'on attends en resultat
  }

  static createOne(status) {
    const sql = "INSERT INTO status SET name=?";
    return connection.promise().query(sql, [status]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE status SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM status WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Status;
