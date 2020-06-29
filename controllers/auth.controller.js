const config = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');
const User = db.user;
const Student = db.student; 
const Role = db.role; 
const Op = db.Op; 


exports.register = (req, res) => {
    // Saves user to the database
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name, 
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            if (req.body.user_role){
                Role.findAll({
                    where: {
                        name: req.body.user_role 
                    }
                })
           }
        })
        .catch(
        err => res.status(500).send({ message: err.message})
    );
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            return res.status(404).send({ message: "User not found"}); 
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password,
        );

        if(!passwordIsValid){
            return res.status(401)
            .send({
                accessToken: null,
                message: "Invalid Password", 
            }); 
        }

        let token = jwt.sign({ id: user.id}, config.auth.secret, {expiresIn: 86400}) // 24hours
    
        res.status(200).send({
            id: user.id, 
            email: user.email, 
            user_role: user.user_role, 
            accessToken: token, 
        });
    }).catch(err => res.status(500).send({message: err.message})); 
};