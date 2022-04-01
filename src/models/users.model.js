const { connection } = require("../../db-connection");

class User {
  static findMany() {
    const sql = "SELECT * FROM users";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql =
      "SELECT id, firstname, lastname, birthday, address, postal_code, city, email,phone, adoption_date, picture, cotisation_payed, active FROM users WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByEmail(email) {
    const sql = "SELECT * FROM users WHERE email=?";
    return connection.promise().query(sql, [email]);
  }

  static createOne(userInformation) {
    const sql = "INSERT INTO users SET ?";
    return connection.promise().query(sql, [userInformation]);
  }

  static updateOneById(userInformation, id) {
    const sql = "UPDATE users SET ? WHERE id=?";
    return connection.promise().query(sql, [userInformation, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM users WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByFirstnameAndLastname(firstname, lastname) {
    const sql =
      "SELECT id, firstname, lastname, birthday, address, postal_code, city, email, phone, adoption_date, picture, cotisation_payed, active, status_id, province_id, reception_place_id, room_id, adoption_place_id FROM users WHERE firstname=? AND lastname=?";
    return connection.promise().query(sql, [firstname, lastname]);
  }
}

module.exports = User;
