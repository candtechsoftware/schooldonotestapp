const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const secret = process.env.SERCRET_KEY;

const db = require('../models/index.js');
const Admin = db.admin; 
const Student = db.student; 
const School = db.school; 



class AdminController {
    /**
    /------------------------------------
    / Admin Controller Admin Management
    /-------------------------------------
    */
    
    // Admin Login 
    static async login(req, res) {
        try{
            let { email, password } = req.body;
            await Admin.findAll({
                where: {email : email }
            })
                .then(admin => {
                    if(admin.length === 0){
                        return res.status(400).json({ message:`Sorry, account does not exist`});
                    } else {
                        const passwordIsValid = bcrypt.compareSync(password, admin[0].dataValues.password.trim());

                        if (passwordIsValid) {
                            let adminDetails = {
                                id: admin[0].dataValues.id,
                                first_name: admin[0].dataValues.first_name,
                                last_name: admin[0].dataValues.last_name,
                                email: admin[0].dataValues.email,
                            }

                            let token = jwt.sign({
                                admin: adminDetails, 
                            }, sercret, {
                                expiresIn: '1d',
                            });

                            res.status(200).json({
                                success: true,
                                admin: adminDetails,
                                message: "Login Successful",
                                token: token,
                            });
                        } else {
                            res.status(401).json({
                                success: false,
                                message: "Authentication failed"
                            });
                        }
                
                    }
                })
                .catch(err => {res.status(500).json({ message: err.message})}); 
        } catch (e) {
            res.status(500).json({ err: e});

        }
    }

    // Create another admin account 
    static async createAdminAccount(req, res) {
        try{
            let {
                first_name,
                last_name,
                email,
                password, 
            } = req.body; 

            await Admin.findAll({
                where: {
                    emai: email,
                    is_archived: false, 
                },
            })
                .then(result => {
                    if (result > 0) {
                        res.status(400).json({ message: 'Email already in use'}); 
                    } else {
                        let hashPassword = bcrypt.hashSync(password, 10); 
                        let newAdmin = {
                            first_name,
                            last_name,
                            email,
                            password,
                        }
                        Admin.create(newAdmin)
                            .then(data => {
                                if(data){
                                    res.status(201).json({
                                        message: 'Admin Created',
                                        admin: data
                                    }); 
                                }
                            })
                            .catch(err => {
                                res.status(500).json({error: `Error in create admin: ${err.message}`}); 
                            })
                    }
                });
        } catch (e){
            res.status(500).json({ err: e});
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
                where: {id:id},
            })
                .then(result => {
                    if (result.length ==1){
                        Student.update(archivedStudent, {
                            where: { id: id }
                        })
                    }
                })
                .catch(err => res.status(500).json({ err: err})); 
        } catch (e) {
            res.status(500).json({ err: e}); 
        }
    }

    static async archiveMultipleStudent(req, res) {
        try {
            await Student.findAll({
                where: {is_archived: false},
            })
                .then(result => {
                    res.status(200).json({ result: result });
                    console.log(result);
                })

        } catch (e) {
            res.status(500).json({ err: e}); 
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
            name = name.toLowerCase().replace(/ /g,''); // Strips whitspace and lowers the case so we can make sure we dont

            await School.findAll({
               where: {name: name}
             })
                .then(result => {
                    if(result.length > 0){
                        res.status(201).json({ message: 'Sorry, School Already Exists'});
                    } else  {
                        let newSchool = {
                           name: name,
                     }
                        School.create(newSchool)
                            .then(data => {
                                res.status(200).json({ message: 'School Created Sucessfully', school_data: data});
                            })
                            .then(err => res.status(500).json({message: err})); 
                    }
            })

        } catch(e) {
            res.status(500).json({ err: e});
        }
   }


    // Deleting School 
    static async archiveSchool(req, res) {
        try{
            const { name } = req.body; 

            let archivedSchool = {
                name: name,
                is_Archived: true,
            }
            await School.update(archivedSchool, {
                where: {
                    id: req.params.id
                }
            })
                .then(response => {
                    res.status(200).json({ success: true, message: 'School account archived'})
                })

        } catch (e){
            res.status(500).json({ err: e }); 
        }
    }
    static async updateSchool(req, res) {
        try{
            const { name } = req.body; 

            let updatedSchool = {
                name: name,
              }
            await School.update(updatedSchool, {
                where: {
                    id: req.params.id
                }
            })
                .then(response => {
                    res.status(200).json({ success: true, message: 'School account updated successfully'})
                })

        } catch (e){
            res.status(500).json({ err: e }); 
        }
    }
}

module.exports = AdminController; 