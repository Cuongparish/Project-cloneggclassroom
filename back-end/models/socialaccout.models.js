const postgre = require("./database");

module.exports = {
    getbyEmail: async (Email) => {
        const { rows } = await postgre.query(
            `select * from "User" where "Email" = '${Email}'`
        );
        return { rows };
    },

    addUser: async (Email) => {
        const sql = `INSERT INTO "User"(
          "Email")
          VALUES ($1) RETURNING *`;
        const { rows } = await postgre.query(sql, [Email]);
        return { rows };
    },
}