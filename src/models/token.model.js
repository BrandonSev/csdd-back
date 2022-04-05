const { connection } = require("../../db-connection");

class Token {
  static findMany() {
    const sql = "SELECT * FROM token";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM token WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByUserIdAndToken(id, token) {
    const sql = "SELECT * FROM token WHERE users_id=? AND token=?";
    return connection.promise().query(sql, [id, token]);
  }

  static findOneByUserId(id) {
    const sql = "SELECT * FROM token WHERE users_id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(token) {
    const sql = "INSERT INTO token SET ?";
    return connection.promise().query(sql, [token]);
  }

  static removeOneByUsersId(id) {
    const sql = "DELETE FROM token WHERE users_id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Token;
