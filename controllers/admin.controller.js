const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SERCRET_KEY;

const db = require("../models/index.js");
const { rest } = require("underscore");
const Admin = db.admin;
const Student = db.student;
const School = db.school;
const AdminSettings = db.admin_settings;
const { Op } = require("sequelize");


class AdminController {
  /**
    /------------------------------------
    / Admin Controller Admin Management
    /-------------------------------------
    */

  // Admin Login
  static async login(req, res) {
    try {
      let { email, password } = req.body;
      await Admin.findAll({
        where: { email: email },
      })
        .then((admin) => {
          if (admin.length === 0) {
            return res
              .status(401)
              .json({ message: `Sorry, account does not exist` });
          } else {
            const passwordIsValid = bcrypt.compareSync(
              req.body.password,
              admin[0].dataValues.password.trim()
            );

            if (passwordIsValid) {
              let adminDetails = {
                id: admin[0].dataValues.id,
                first_name: admin[0].dataValues.first_name,
                last_name: admin[0].dataValues.last_name,
                email: admin[0].dataValues.email,
              };

              let token = jwt.sign(
                {
                  admin: adminDetails,
                  isAdmin: true,
                  isAuthenticated: true,
                },
                secret,
                {
                  expiresIn:'1h',
                }
              );

              res.status(200).json({
                success: true,
                admin: adminDetails,
                message: "Login Successful",
                token: token,
              });
            } else {
              res.status(401).json({
                success: false,
                message: "Authentication failed",
              });
            }
          }
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    } catch (e) {
      res.status(500).json({ err: e });
    }
  }

  // Create another admin account
  static async createAdminAccount(req, res) {
    try {
      let { first_name, last_name, email, password } = req.body;

      await Admin.findAll({
        where: {
          email: email,
          is_archived: false,
        },
      }).then((result) => {
        if (result > 0) {
          res.status(409).json({ message: "Email already in use" });
        } else {
          let hashPassword = bcrypt.hashSync(password, 10);

          let newAdmin = {
            first_name,
            last_name,
            email,
            password: hashPassword,
          };
          Admin.create(newAdmin)
            .then((data) => {
              if (data) {
                res.status(201).json({
                  message: "Admin Created",
                  admin: data,
                });
              }
            })
            .catch((err) => {
              res
                .status(500)
                .json({ error: `Error in create admin: ${err.message}` });
            });
        }
      });
    } catch (e) {
      res.status(500).json({ err: `test: ${e}` });
    }
  }


  static async loadAdmin(req, res) {
    try {
      const user = await Admin.findByPk(req.user.admin.id);
      res.status(201).json({
        message: 'user loaded',
        user: {
          is: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          isAdmin: true,
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
  
  static async getAllAdmins(req, res) {
    try {
      const response  = await Admin.findAll({
        where:{
          is_archived: false,
          is_super: false,
        },
        attributes: ['id','first_name', 'last_name', 'email']
      })

      res.status(200).json({admins: response});
    } catch(err){
      console.log(err); 
    }
  }

  static async archiveAdmin(req, res) {
    try {
      let id = req.params.id;   
      if(id == 1) {
        res.status(500).json({message: 'Invalid Admin Type'});
        return; 
      }
      const admin = Admin.findByPk(id);
      if (!admin){
        res.status(500).json({error: "No admins"});
        return; 
      }
    
      const deletedAdmin = await Admin.destroy({ where: {id:id}});
      res.status(200).json({admin: deletedAdmin , message: "Admin deleted"});
    } catch (err){
      console.log(err);
    }
  }

    /**
    /------------------------------------
    / Admin Controller Settings Management
    /-------------------------------------
    */

    static async getAllSettings(req, res) {
      try {
          const settings = await AdminSettings.findAll();
          
          if (settings.length > 0 )  {
            res.status(200).json({settings});
          } else {
            res.status(401).json({message: 'No Admin Settingsdd'})
          }
      } catch (err) {
        res.status(500).json({error: err.message});
      }

    }


    static async updateSetting(req, res) {
      try {
          let id = req.params.id;
          const settings = await AdminSettings.findByPk(id);
          
          if (settings)  {
            settings.value = req.body.value;
            settings.save();
            res.status(200).json({settings, update: req.body});
          } else {
            res.status(401).json({message: 'No Admin Settings'})
          }
      } catch (err) {
        res.status(500).json({error: err.message});
      }

    }


  /**
    /------------------------------------
    / Admin Controller Student Management
    /-------------------------------------
    */

  static async archiveSingleStudent(req, res) {
    try {
      let id = req.params.id;

      let archivedStudent = {
        is_archived: true,
      };
      await Student.findAll({
        where: { id: id },
      })
        .then((result) => {
          if (result.length == 1) {
            Student.update(archivedStudent, {
              where: { id: id },
            }).then((response) => {
              res
                .status(200)
                .json({ success: true, message: "Student account archived" });
            });
          }
        })
        .catch((err) => res.status(500).json({ err: err }));
    } catch (e) {
      res.status(500).json({ err: e });
    }
  }

  static async archiveMultipleStudent(req, res) {
    try {
      await Student.findAll({
        where: { is_archived: false },
      }).then((result) => {
        for (let i = 0; i < result.length; i++) {
          Student.update(
            { is_archived: true },
            {
              where: { id: result[i].id },
            }
          ).catch((err) => res.status(500).json({ err: err }));
        }
        res.status(200).json({ message: "All Students have been archived" });
      });
    } catch (e) {
      res.status(500).json({ err: e });
    }
  }

  /**
    /------------------------------------
    / Admin Controller School Management
    /-------------------------------------
    */

  // Adding A School
  static async createSchool(req, res) {
    try {
      const { name } = req.body;

      await School.findAll({
        where: { name: name },
      }).then((result) => {
        if (result.length > 0) {
          res.status(201).json({ message: "Sorry, School Already Exists" });
        } else {
          let newSchool = {
            name: name,
          };
          School.create(newSchool)
            .then((data) => {
              res.status(200).json({
                message: "School Created Sucessfully",
                school_data: data,
              });
            })
            .catch((err) => res.status(500).json({ message: err }));
        }
      });
    } catch (e) {
      res.status(500).json({ err: e });
    }
  }

  // Getting All Schools
  static async fetchSchools(req, res) {
    try {
      await School.findAll({
        attributes: ['id', 'name'],
        where: { 
          is_archived: false,
        }
      }).then((result) => {
        if (result.length < 1) {
          res
            .status(203)
            .json({ message: "No school accoun has been created" });
        } else {
          res.status(201).json({
            success: true,
            schools: result,
          });
        }
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error in finding all schools: ${err.message}` });
    }
  }

  // Deleting School
  static async archiveSchool(req, res) {
    try {
      const { name } = req.body;

      let archivedSchool = {
        name: name,
        is_archived: true,
      };
      await School.update(archivedSchool, {
        where: {
          id: req.params.id,
        },
      }).then((response) => {
        res
          .status(200)
          .json({ success: true, message: "School account archived" });
      });
    } catch (e) {
      res.status(500).json({ err: e });
    }
  }
  static async updateSchool(req, res) {
    try {
      const { name } = req.body;

      let updatedSchool = {
        name: name,
      };
      await School.update(updatedSchool, {
        where: {
          id: req.params.id,
        },
      }).then((response) => {
        res.status(200).json({
          success: true,
          message: "School account updated successfully",
        });
      });
    } catch (e) {
      res.status(500).json({ err: e });
    }
  }
}

module.exports = AdminController;
