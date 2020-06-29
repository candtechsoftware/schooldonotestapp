const db = require('../models');
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
    // Email 
    User.findOne({
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
