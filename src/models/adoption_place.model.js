const { connection } = require("../../db-connection");

class AdoptionPlace {
  static findMany() {
    const sql = "SELECT * FROM adoption_place";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM adoption_place WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(adoption_place) {
    const sql = "INSERT INTO adoption_place SET ?";
    return connection.promise().query(sql, [adoption_place]);
  }

  static updateOneById(adoption_place, id) {
    const sql = "UPDATE adoption_place SET ? WHERE id = ?";
    return connection.promise().query(sql, [adoption_place, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM adoption_place WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM adoption_place WHERE name=?";
    return connection.promise().query(sql, [name]);
  }
}

module.exports = AdoptionPlace;