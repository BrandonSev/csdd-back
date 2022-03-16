const { connection } = require("../../db-connection");

class Books {
  static findMany() {
    const sql = "SELECT * FROM books";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM books WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM books WHERE filename=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(book) {
    const sql = "INSERT INTO books SET ?";
    return connection.promise().query(sql, [book]);
  }

  static updateOneById(book, id) {
    const sql = "UPDATE books SET ? WHERE id=?";
    return connection.promise().query(sql, [book, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM books WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Books;
