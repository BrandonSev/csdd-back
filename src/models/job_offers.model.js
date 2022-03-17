const { connection } = require("../../db-connection");

class JobOffers {
  static findMany() {
    const sql = "SELECT * FROM job_offers";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM job_offers WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(post) {
    const sql = "SELECT * FROM job_offers WHERE name=?";
    return connection.promise().query(sql, [post]);
  }

  static createOne(post) {
    const sql = "INSERT INTO job_offers SET ?";
    return connection.promise().query(sql, [post]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE job_offers SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM job_offers WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = JobOffers;
