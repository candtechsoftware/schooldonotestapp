const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const checkJWT = require("../middlewares/check-token");

const StudentController = require("../controllers/student.controller");

/**
 *
 * Student Routes
 *
 */

// Student Registration
router.post("/student/register", StudentController.registerStudent);
router.post("/student/login", StudentController.login);

module.exports = router;
