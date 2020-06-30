const db = require('../models');
const Student = db.Student;
const Admin = db.Admin;

checkDuplicateEmail = (req, res, next) => {
    // Email 
    Student.findOne({
        where: {
            email: req.body.username
        }
    })
        .then(user => {
            if (user) {
                res.status(400)
                    .send({message : 'Failed, Email Already in use'}); 
            }
            return 
        })

    next(); 
}; 


checkAdminDuplicateEmail = (req, res, next) => {
    // Email 
    Admin.findOne({
        where: {
            email: req.body.username
        }
    })
        .then(user => {
            if (user) {
                res.status(400)
                    .send({message : 'Failed, Email Already in use'}); 
            }
            return 
        })

    next(); 
}; 

const verfiySignUp = {
    checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verfiySignUp; 
