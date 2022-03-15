const { connection } = require("../../db-connection");

class Room {
  static findMany() {
    const sql = "SELECT * FROM room";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM room WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(room) {
    const sql = "INSERT INTO room SET ?";
    return connection.promise().query(sql, [room]);
  }

  static updateOneById(room, id) {
    const sql = "UPDATE room SET ? WHERE id=?";
    return connection.promise().query(sql, [room, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM room WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Room;
