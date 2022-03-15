const { connection } = require("../../db-connection");

class Province {
  static findMany() {
    const sql = "SELECT * FROM province";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM province WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(province) {
    const sql = "INSERT INTO province SET?";
    return connection.promise().query(sql, [province]);
  }

  static updateOneById(province, id) {
    const sql = "INSERT INTO province SET ? WHERE id = ?";
    return connection.promise().query(sql, [province, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM province WHERE id =?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Province;