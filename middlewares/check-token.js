const jwt = require('jsonwebtoken');
require("dotenv").config();
const secret = process.env.SERCRET_KEY;


module.exports = function(req, res, next) {
  let token = req.headers["authorization"];

  if (!token) { 
    return res.status(401).json({ messge: "Missing authorization token"});
  }
  try {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Token is not valid'});
      } else {
        req.user =  decoded;
        next();
      }
    })

  } catch (err) {
    console.error('something went wrong with auth middleware');
    res.status(500).json({ message: 'Server auth error'});
  }
}