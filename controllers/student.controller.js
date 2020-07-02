const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SERCRET_KEY;

const db = require("../models/index.js");
const Student = db.student;

class StudentController {
  static async registerStudent(req, res) {
    try {
      let {
        first_name,
        last_name,
        email,
        password,
        phone,
        shirt_size,
        grade,
        teacher,
        school_id,
      } = req.body;

      await Student.findAll({
        where: {
          email: email,
          is_archived: false,
        },
      }).then(result => {
        if (result.length > 0) {
          res.status(400).json({ message: "Email is already registered" });
        } else {
          let hashPassword = bcrypt.hashSync(password, 10);
          let newStudent = {
            first_name,
            last_name,
            email,
            password: hashPassword,
            phone,
            shirt_size,
            grade,
            teacher,
            school_id,
          };
          Student.create(newStudent)
            .then(data => {
              if (data) {
                res.status(201).json({
                  message: "Student Created",
                  student: data,
                });
              }
            })
            .catch((err) =>
              res.status(500).json({ error: `Err test: ${err.message}` })
            );
        }
      });
    } catch (e) {
      res.status(500).json({ error: `Error in controller ${e}` });
    }
  }

  static async login(req, res) {
    let { email, password } = req.body;

    await Student.findAll({
      where: {
        email: email,
        is_Archived: false,
      },
    })
      .then((student) => {
        if (student.length === 0) {
          res.status(400).json({ message: "Sorry, account does not exsist" });
        } else {
          let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            student[0].password.trim()
          );
          if (passwordIsValid) {
            let studentDetails = {
              id: student[0].dataValues.id,
              first_name: student[0].first_name,
              last_name: student[0].last_name,
            };
            let token = jwt.sign(
              {
                student: studentDetails,
              },
              secret,
              {
                expiresIn: "1d",
              }
            );

            res.status(200).json({
              success: true,
              student: studentDetails,
              message: "Login successfull",
              token: token,
            });
          } else {
            res.status(401).json({
              success: false,
              message: "Login failed",
            });
          }
        }
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  }

  static async updateStudent(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        phone,
        shirt_size,
        grade,
        teacher,
      } = req.body;
      let hashpassword = bcrypt.hashSync(password, 10);

      let updateStudent = {
        first_name,
        last_name,
        email,
        password: hashpassword,
        phone,
        shirt_size,
        grade,
        teacher,
      };

      Student.update(updateStudent, {
        where: {
          id: req.params.id,
        },
      })
        .then((response) => {
          res
            .status(200)
            .json({ success: true, message: "Student updated successfully" });
        })
        .then((err) => res.json({ err: err.message }));
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async archiveStudent(req, res) {
    try {
      let id = req.params.id;
      await Student.findAll({
        where: { id: id },
      }).then((result) => {
        if (result.length == 1) {
          Student.update({ is_Archived: true }, { where: { id: id } });
        }
      });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}

module.exports = StudentController;
