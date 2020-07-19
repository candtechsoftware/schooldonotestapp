const db = require("../models/index.js");
const Donation = db.donation;
const School = db.school;
const Student = db.student;


class DonationController {
  static async addDonation(req, res) {
    try {
      let { student_id, school_id, amount } = req.body;

      let newDonation = {
        student_id,
        school_id,
        amount,
      };
      console.log(req.body);
      await Donation.create(newDonation)
        .then((data) => {
          if (data) {
            res
              .status(201)
              .json({ message: "Donataion Added", donation: data });
          }
        })
        .catch((error) =>
          res.status(500).json({
            error: `Error in donation creation: ${error}`,
          })
        );
    } catch (err) {
      res.status(400).json({
        message: `Error caused while adding donation: ${err}`,
        data: req.body,
      });
    }
  }

  // Fetches all donations
  static async getAllDonations(req, res) {
    try {
      await Donation.findAll({
        include: [
          {model: Student, attributes: ['first_name', 'last_name']},
          {model: School , attributes: ['name']},
        ],
        attributes: ['amount', 'created_at']
      }).then((result) => {
        if (result.length < 1) {
          res.status(203).json({ message: "No donations have been made" });
        } else {

          res.status(201).json({ donations: result });
        }
      });
    } catch (err) {
      res.status(400).json({
        message: `Error caused while getting all donations: ${err.message}`,
      });
    }
  }

  // Gets Donations by student
  static async getDonationByStudent(req,res) {
    try {
      const donations = await Donation.findAll({
        attributes: [
          'id',
          'amount',
          'student_id',
          'school_id',
          'created_at', 
        ],  where: { 
          student_id: req.user.student.id, 
        },
      })
      res.status(201).json({ donations })
      console.log(donations);
    } catch(err) {
      console.log(err);       
    }

  }
}

module.exports = DonationController;
