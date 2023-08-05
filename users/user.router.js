const { getAdmins, login } = require("./user.controller")
const router = require("express").Router()

router.get("/get", getAdmins)
router.post("/login", login)

module.exports = router