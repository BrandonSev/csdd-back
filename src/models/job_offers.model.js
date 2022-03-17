const { connection } = require("../../db-connection");

class JobOffers {
  static findMany() {
    const sql = "SELECT * FROM Job_offers";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM Job_offers WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM Job_offers WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(name) {
    const sql = "INSERT INTO Job_offers SET name=?";
    return connection.promise().query(sql, [name]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE Job_offers SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM Job_offers WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = JobOffers;
