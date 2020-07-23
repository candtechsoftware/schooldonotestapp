const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkJWT = require('../middlewares/check-token');

const StudentController = require('../controllers/student.controller');
const AdminController = require('../controllers/admin.controller');
const DonationController = require('../controllers/donatations.controller');

/**
/------------------------------------
/ StudentRoutes
/-------------------------------------
*/

// Student Registration
// @access public
router.post('/student/register', StudentController.registerStudent);

// Student Login
// @access public
router.post('/student/login', StudentController.login);

// GET logged in student by token
router.get('/student', checkJWT, StudentController.loadStudent);

// Fetch All Students
// @access public
router.get('/students', StudentController.getAllStudents);
router.get('/student/:id', StudentController.getSingleStudent);
/**
/------------------------------------
/ Admin Routes
/-------------------------------------
*/

// Creating an Admin Account
// @access protected
// Only Admins can create other admin accounts
router.post('/admin/register', AdminController.createAdminAccount);

// Logging In Admin Account
// @access public
router.post('/admin/login', AdminController.login);

// GET logged in admin by token
router.get('/admin', checkJWT, AdminController.loadAdmin);
// Admin Adding A School
// @access admin only
router.post('/admin/school', AdminController.createSchool);

// Finding Get All Schools
// @access public
router.get('/schools/', AdminController.fetchSchools);

// Removing A School
router.delete('/admin/school/:id', AdminController.archiveSchool);

// Archive Student
// @access protected
// only admins can archive accounts
router.delete('/admin/student/:id', AdminController.archiveSingleStudent);
router.delete(
  '/admin/student/',
  [checkJWT],
  AdminController.archiveMultipleStudent,
); // All Students

/**
/------------------------------------
/ Donations Routes
/-------------------------------------
*/

// Creating a donations from IPN
// @access public
router.post('/donation', DonationController.addDonation);

// Students Viewing All their donations
// @access private (Student can view only their donations total)
router.get(
  '/student/donations/',
  [checkJWT],
  DonationController.getDonationByStudent,
);

// View Donations All Donatiosn
// @access privagte (Admin Only)
router.get('/admin/donations', [checkJWT], DonationController.getAllDonations);

module.exports = router;
