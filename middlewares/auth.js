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



const auth = {
    verifyToken: verifyToken,
}

module.exports = auth; 


