const {
  create,
  getAdmins,
  getUserByEmail,
  deleteUser,
} = require("./user.service");

const { hashSync, genSaltSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
  getAdmins: (req, res) => {
    getAdmins((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({ data: results, status: 200 });
    });
  },
  login: (req, res) => {
    const { email, password } = req.body;


    getUserByEmail(email, async (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          status: 400,
          message: `Invalid email or password  ${results}`,
        });
      }
      const result = await compare(password, results.password);

      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "12h",
        });

        return res.json({
          status: 200,
          data: jsontoken,
        });

      } else {
        return res.json({
          status: 400,
          message: `Invalid email or password 3 ${result} given password: ${password}, result password: ${results.password}`,
        });
      }
    });
  },

};