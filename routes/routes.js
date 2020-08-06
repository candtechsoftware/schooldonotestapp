const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkJWT = require('../middlewares/check-token');
var ipn = require('express-ipn');

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

// Student Login
// @access public
router.post('/student/forgot-password', StudentController.sendResetLink);
router.post('/student/reset-password/:token', StudentController.resetPassword);


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
router.post('/admin/register', [checkJWT], AdminController.createAdminAccount);

// Load all settigns
router.get('/admin/settings', [checkJWT], AdminController.getAllSettings)

// Update Settings
router.post('/admin/settings/:id',[checkJWT], AdminController.updateSetting)

// Logging In Admin Account
// @access public
router.post('/admin/login', AdminController.login);

// GET logged in admin by token
router.get('/admin', [checkJWT], AdminController.loadAdmin);

// GET logged in admin by token
router.get('/admins',  [checkJWT], AdminController.getAllAdmins);
// Delete logged in admin by token

router.post('/admin/:id',  [checkJWT], AdminController.archiveAdmin);


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
  '/donations/student',
  [checkJWT],
  DonationController.getDonationByStudent,
);

// View Donations All Donations
// @access privagte (Admin Only)
router.get('/admin/donations',  [checkJWT],DonationController.getAllDonations);

// View Donations by School 
// @access privagte (Admin Only)
router.get('/admin/school/donations/',  [checkJWT],DonationController.getDonationsGroupedBySchool);


// View Donations by School ID
// @access privagte (Admin Only)
router.get('/admin/school/donations/:id', [checkJWT],  DonationController.getDonationsBySchoolId);


// View Donations by School 
// @access privagte (Admin Only)
router.get('/admin/student/donations/', [checkJWT],  DonationController.getDonationsGroupedByStudent);


// View Donations by School ID
// @access privagte (Admin Only)
router.get('/admin/student/donations/:id', [checkJWT],   DonationController.getDonationsByStudentId);

// Paypal Ipn listener 
router.post('/ipn', DonationController.paypalHandler);


module.exports = router;
