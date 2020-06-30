const express = require('express');
const router = express.Router();

const db = require('../models/index');
const Student = db.Student;


// @route    POST api/users
// @desc     Register Student
// @access   Public
router.post('/', [],
  (req, res) => {
    try {
      let user = Student.findOne({
        where: {
          email: req.body.email
        }
      });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exsits'}]});
      }
      Student.create({
          first_name: req.body.first_name,
          first_name: req.body.last_name,
          email: req.body.email,
          password
          

      })


    }

    catch (err) {
        console.error(err);  
    }


  }


)