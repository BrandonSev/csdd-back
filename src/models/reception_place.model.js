const { connection } = require("../../db-connection");

class ReceptionPlace {
  static findMany() {
    const sql = "SELECT * FROM reception_place";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM reception_place WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(reception_place) {
    const sql = "INSERT INTO reception_place SET ?";
    return connection.promise().query(sql, [reception_place]);
  }

  static updateOneById(reception_place, id) {
    const sql = "UPDATE reception_place SET ? WHERE id = ?";
    return connection.promise().query(sql, [reception_place, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM reception_place WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM reception_place WHERE name=?";
    return connection.promise().query(sql, [name]);
  }
}

module.exports = ReceptionPlace;
