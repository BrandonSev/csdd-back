const { connection } = require("../../db-connection");

class Status {
    static findMany() {
        const sql = "SELECT * FROM status";
        return connection.promise().query(sql);
    }

    static findOneById(id) {
        const sql = "SELECT * FROM status WHERE id=?";
        return connection.promise().query(sql, [id]);// [id]= se que l'on attends en resultat
    }

    static createOne(status) {
        const sql = "INSERT INTO status SET ?";
        return connection.promise().query(sql, [status]);
    }
    static deleteOnById(id) {
        const sql = "DELETE FROM status WHERE id=?";
        return connection.promise().query(sql, [id]);
    }
}

module.exports = Status ;