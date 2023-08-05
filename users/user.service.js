const pool = require("../database")
require("dotenv").config()

module.exports = {
    getAdmins: (callBack) => {
        pool.query(`SELECT * FROM admins`, [], (error, results, fields) => {
            if (error) {
                callBack(error);
            }

            return callBack(null, results)
        })
    },
    getUserByEmail: (email, callBack) => {
        pool.query(`SELECT * FROM admins WHERE email = ?`,
            [email],
            (error, results, fields) => {

                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    }
}