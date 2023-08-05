const pool = require("../database")
require("dotenv").config()

module.exports = {
    create: (data, callback) => {

        pool.query(`INSERT INTO appointment_list(name,email,sid,slot) VALUES(?,?,?,?)`, [data.name, data.email, data.sid, data.slot],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }

                pool.query(`UPDATE appointment_slot SET remainingSeats = remainingSeats - 1 where id =? AND remainingSeats > 0`, [data.slot], (error, results, fields) => {

                    if (error) {
                        return callback(error)
                    }
                    return callback(null, results)
                })
            }
        )
    },
    updateSeat: (data, callback) => {

    }
    ,
    getAppointmentList: (callback) => {
        pool.query(`SELECT * FROM appointment_list`, [],
            (error, results, fields) => {

                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            })
    },
    getAppointmentSlot: (callback) => {
        pool.query(`SELECT * FROM appointment_slot`, [],
            (error, results, fields) => {

                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            })
    }
}