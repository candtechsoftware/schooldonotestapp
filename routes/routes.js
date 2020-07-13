const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const checkJWT = require("../middlewares/check-token");

const StudentController = require("../controllers/student.controller");
const AdminContoller = require("../controllers/admin.controller");
const DonationController = require("../controllers/donatations.controller");

/**
/------------------------------------
/ StudentRoutes
/-------------------------------------
*/

// Student Registration
// @access public
router.post("/student/register", StudentController.registerStudent);

// Student Login
// @access public
router.post("/student/login", StudentController.login);

// Fetch All Students
// @access public
router.post("/studens/", (req, res) => {
  res.status(200).json({ message: "needs to return a list of all students" });
});

/**
/------------------------------------
/ Admin Routes
/-------------------------------------
*/

// Creating an Admin Account
// @access protected
// Only Admins can create other admin accounts
router.post("/admin/register", AdminContoller.createAdminAccount);

// Logging In Admin Account
// @access public
router.post("/admin/login", AdminContoller.login);

// Admin Adding A School
// @access admin only
router.post("/admin/school", [checkJWT], AdminContoller.createSchool);

// Admin Finding A School
// @access admin only
router.get("/admin/school/", [checkJWT],AdminContoller.fetchSchools);

// Removing A School
router.delete("/admin/school/:id", [checkJWT], AdminContoller.archiveSchool);

// Archive Student
// @access protected
// only admins can archive accounts
router.delete("/admin/student/:id", [checkJWT], AdminContoller.archiveSingleStudent);
router.delete("/admin/student/", [checkJWT],AdminContoller.archiveMultipleStudent); // All Students

/**
/------------------------------------
/ Donations Routes
/-------------------------------------
*/

// Creating a donations from IPN
// @access public 
router.post("/student/donations", DonationController.addDonation);

// Students Viewing All their donations
// @access private (Student can view only their donations total) 
router.get("/student/donations/", [checkJWT],DonationController.getAllDonations);

// View Donations All Donatiosn
// @access privagte (Admin Only) 
router.get('/admin/donations', [checkJWT],(req, res ) => {
    res.status(200).json({ message: "Need to add controller action"}); 
})

module.exports = router;
