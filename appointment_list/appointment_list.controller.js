const { create, getAppointmentList, getAppointmentSlot } = require("./appointment_list.service")
module.exports = {
    createAppointment: (req, res) => {
        const body = req.body

        create(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: err.sqlMessage
                })
            }

            return res.status(200).json({
                status: 200,
                data: { ...results }
            })
        })
    },
    getAppointmentList: (req, res) => {
        getAppointmentList((err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    status: 500,
                    message: "Some error occured while fetching the data."
                })

            }

            console.log(results)

            return res.status(200).json({
                status: 200,
                data: results
            })
        })
    },
    getAppointmentSlot: (req, res) => {
        getAppointmentSlot((err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    status: 500,
                    message: "Some error occured while fetching the data."
                })
            }
            return res.status(200).json({
                status: 200,
                data: results
            })

        })
    }
}