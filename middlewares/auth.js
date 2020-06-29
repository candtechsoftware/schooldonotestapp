const jwt = require('jsonwebtoken');
const config = require('../config/config'); 
const db = require('../models');
const User = db.user; 


verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']; 

    if(!token) {
        return res.status(403)
            .send({ message: 'No token provided'}); 
    };

    jwt.verfiy(token, config.auth.secret, (err, decoded) => {
        if(err) {
            return res.status(401)
                .send({ message: 'Unauthorized'});
        }

        req.user_id = decoded.id; 

        next(); 
    });
};

isAdmin = (req, res, next) => {
    User.findByPk(req.user_id)
        .then(user => {
            if (user.get('user_role_id') == 1)
                next();
                return; 
        })
        .catch(err => {
            res.status(404).send({ message: 'user is not admin'});
            console.error(err);
        })
};

isStudent = (req, res, next) => {
    User.findByPk(req.user_id)
        .then(user => {
            if (user.get('user_role_id') == 0)
                next();
                return; 
        })
        .catch(err => {
            res.status(404).send({ message: 'user is not a student'});
            console.error(err);
        })
};

const auth = {
    verifyToken: verifyToken,
    isAdmin: isAdmin, 
    isStudent: isStudent 
}

module.exports = auth; 


