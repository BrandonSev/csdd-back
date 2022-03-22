const { connection } = require("../../db-connection");

class Categories {
  static findMany() {
    const sql = "SELECT * FROM categories";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM categories WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM categories WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(name) {
    const sql = "INSERT INTO categories SET name=?";
    return connection.promise().query(sql, [name]);
  }

  static updateOneById(newValue, id) {
    const sql = "UPDATE categories SET ? WHERE id=?";
    return connection.promise().query(sql, [newValue, id]);
  }

  static removeOneById(id) {
    const sql = "DELETE FROM categories WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Categories;
