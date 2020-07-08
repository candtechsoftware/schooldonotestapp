const db = require('../models/index.js');
const Donation = db.donation;
const School = db.school;
const Student = db.student;

class DonationController {

  static async addDonation(req, res) {
    try{
      let {
        student_id,
        school_id,
        amount,
      } = req.body; 

      let newDonation = {
        student_id,
        school_id,
        amount, 
      };
      console.log(req.body)
      await Donation.create(newDonation)
        .then(data => {
          if (data) {
            res.status(201).json(
              { message: "Donataion Added",
                donation: data, 
            });
          }
        })
        .catch(error => res.status(500).json({
          error: `Error in donation creation: ${error}`,
        }))

    } catch (err) {
      res.status(400).json({ 
        message: `Error caused while adding donation: ${err}`,
        data: req.body
        });
    }

  }

  // Fetches all donations
  static async getAllDonationsby (req, res) {
    try{
      await Donation.findAll({ 
        include: [Student, School]
      })
      .then(result => {
        if (result.length < 1) {
          res.status(203).json(
            { message: 'No donations have been made' }
          )
        }
      })
    } catch (err) {
      res.status(400).json({ message: `Error caused while getting all donations: ${err.message}`});
    }

  }


}

module.exports = DonationController; 