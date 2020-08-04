const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require('../config/sendmail');
const db = require("../models/index.js");
const Student = db.student;
const School = db.school;
const secret = process.env.SERCRET_KEY;
require('dotenv').config(); 

class StudentController {
  static async registerStudent(req, res) {
    try {
      let {
        student_school_id,
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
      }).then((result) => {
        if (result.length > 0) {
          res.status(409).json({ message: "Email is already registered" });
        } else {
          let hashPassword = bcrypt.hashSync(password, 10);
          let newStudent = {
            student_school_id,
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
            .then((data) => {
              if (data) {
                res.status(201).json({
                  message: "Student Created",
                  student: data,
                });
              }
            })
            .catch((err) =>
              res
                .status(500)
                .json({ error: `Error in student creation: ${err.message}` })
            );
        }
      });
    } catch (e) {
      res.status(500).json({ error: `Error in controller: ${e}` });
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
          res.status(401).json({ message: "Sorry, account does not exsist" });
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
                isAdmin: false,
                isAuthenticated: true,
              },
              secret,
              {
                expiresIn: 3600,
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

  static async loadStudent(req, res) {
    try {
      const user = await Student.findByPk(req.user.student.id);
      res.status(201).json({
        message: 'user loaded',
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          isAdmin: false,
          isAuthenticated: true,
        },
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        status: 'Failed',
        message: 'Server Error',
      });
    }
  }

  static async getAllStudents(req, res) {


    try {
      const response = await Student.findAll({
        where: {
          is_archived: false,
        },
        attributes: ['id','first_name', 'last_name', 'student_school_id', 'phone', 'grade', 'teacher', 'shirt_size'],
        include: [
          {model: School, attributes: ['name']}
        ]
      })

      res.status(200).json({students: response });
    } catch (err) {
      console.log('err in gegitt all students', err)
    }

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

  static async getSingleStudent(req, res) {
    try {
      let id = req. params.id;
      let student = await Student.findOne({
        include: [School],
        where: {
          id: id,
          is_archived: false, 
        },
        attributes: ['id','first_name', 'last_name', 'student_school_id', 'phone', 'grade', 'teacher', 'shirt_size'],
      })

      console.log('student: ', student);
      res.status(200).json({ student })
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async sendResetLink(req, res, next) {
    const {email} = req.body;

    try {
      const student = await Student.findOne({where: {email: email}});
      if (!student) return res.status(401).json({message: 'No email found'}); 
      console.log("should be email ", student.dataValues.email); 
      let token = jwt.sign(
        {
          student: student,
        },
        secret,
        {
          expiresIn: 3600,
        }


      )
      let link = `http://localhost:/3000/reset-password/${token}`
      const text = `Hi ${student.first_name} \n
          Please click on following link ${link} to reset password. 
        `
      
      sendMail(student.dataValues.email, "Password Reset", text)
    } catch (err ){
      console.log("Error in forgot password ", err)
    }
    
  }

  static async resetPassword(req, res, next){ 
    let token = req.body.token;
    let student = jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Token is not valid'});
      } else {
        return req.user;

      }
    });
    console.log(student);
  }
}
module.exports = StudentController;
