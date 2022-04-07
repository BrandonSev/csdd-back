const { connection } = require("../../db-connection");

class User {
  static findMany() {
    const sql = "SELECT * FROM users";
    return connection.promise().query(sql);
  }

  // Fonction agrégger
  static findOneById(id) {
    const sql =
      "SELECT u.id, u.firstname, u.lastname, u.birthday, u.address, u.postal_code, u.city, u.email,u.phone, u.adoption_date, u.picture, u.cotisation_payed, u.active, u.reception_date, u.room_id, u.adoption_place_id, u.province_id, GROUP_CONCAT(r.name, '') AS roles FROM users u LEFT JOIN users_roles ur ON ur.users_id=u.id LEFT JOIN roles r ON r.id=ur.roles_id WHERE u.id=?";
    return connection.promise().query(sql, [id]);
  }

  static findRolesForUser(id) {
    const sql = "SELECT roles_id as roleId FROM users_roles WHERE users_id=? GROUP BY roles_id";
    return connection.promise().query(sql, [id]);
  }

  static findOneByEmail(email) {
    const sql =
      "SELECT u.id, u.firstname, u.lastname, u.birthday, u.address, u.postal_code, u.city, u.email,u.phone, u.adoption_date, u.picture, u.cotisation_payed, u.active, u.reception_date, u.password, u.room_id, u.adoption_place_id, u.province_id, GROUP_CONCAT(r.name, '') AS roles FROM users u LEFT JOIN users_roles ur ON ur.users_id=u.id LEFT JOIN roles r ON r.id=ur.roles_id WHERE u.email=?";
    return connection.promise().query(sql, [email]);
  }

  static createOne(userInformation) {
    const sql = "INSERT INTO users SET ?";
    return connection.promise().query(sql, [userInformation]);
  }

  static createRolesForUser(userId, roleId) {
    const sql = "INSERT INTO users_roles SET users_id=?, roles_id=?";
    return connection.promise().query(sql, [userId, roleId]);
  }

  static deleteOlderRolesForUser(userId) {
    const sql = "DELETE FROM users_roles WHERE users_id=?";
    return connection.promise().query(sql, [userId]);
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
      "SELECT u.id, u.firstname, u.lastname, u.birthday, u.address, u.postal_code, u.city, u.email,u.phone, u.adoption_date, u.picture, u.cotisation_payed, u.active, u.reception_date, u.room_id, u.adoption_place_id, u.province_id, u.reception_place_id, GROUP_CONCAT(r.name, '') AS roles FROM users u LEFT JOIN users_roles ur ON ur.users_id=u.id LEFT JOIN roles r ON r.id=ur.roles_id WHERE u.firstname=? AND u.lastname=? GROUP BY u.id";
    return connection.promise().query(sql, [firstname, lastname]);
  }
}

module.exports = User;
