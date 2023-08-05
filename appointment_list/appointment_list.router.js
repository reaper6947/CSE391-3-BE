const { createAppointment, getAppointmentList, getAppointmentSlot } = require("./appointment_list.controller");
const router = require("express").Router();
router.post("/post", createAppointment);
router.get("/list", getAppointmentList);
router.get("/slot", getAppointmentSlot);


module.exports = router;