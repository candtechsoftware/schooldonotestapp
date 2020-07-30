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

  // Get Single School Donations Total
  static async getDonationsBySchoolId(req, res){
    try{
        let id = req.params.id;
        const schoolDonations = await Donation.findAll({
          include: [
            {model: Student, attributes: ['first_name', 'last_name']},
            {model: School, attributes: ['name']},

          ],
          attributes: [
            'id',
            'amount',
            'created_at'
          ],
          where: {
            school_id: id,
          }
        }) 

        if (schoolDonations.length > 0) {

          res.status(200).json({data: schoolDonations});
        }

    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        status: 'Failed',
        message: 'Server error'
      })
    }
  }

  static async getDonationsGroupedBySchool(req, res) {
    try {
      const [donations, meta ] = await db.sequelize.query("SELECT school_id, sum(amount) as total_sum from donations GROUP by school_id");
      const donationsList = []
      for (let dono of donations) {
        console.log(dono.school_id)
        let school = await School.findByPk(dono.school_id)
        console.log("school", school.name);
        donationsList.push({ school_id: dono.school_id, school: school.name, total_amount: dono.total_sum})
      }
      console.log("List ", donationsList);
      res.status(200).json({data: donationsList})
    } catch (err) {
      console.error(err.message);
      res.status(500).json({error: err.message})
    }
  }
    // Get Student Donations Grouped Total 
  static async getDonationsGroupedByStudent(req, res) {
    try {
      const [donations, meta ] = await db.sequelize.query("SELECT student_id, sum(amount) as total_sum from donations GROUP by student_id");
      const donationsList = []
      for (let dono of donations) {
        console.log("id: ", dono.student_id)
        let student = await Student.findByPk(dono.student_id);
        console.log(student.first_name);
        donationsList.push({student_id: student.id, student: `${student.first_name} ${student.last_name}`, total_sum: dono.total_sum});
        
      }
      console.log("List ", donationsList);
      res.status(200).json({data: donationsList})
    } catch (err) {
      console.error(err.message);
      res.status(500).json({error: err.message})
    }
  }




    // Get Single Student Donations Total 
    static async getDonationsByStudentId(req, res){
      try{
          let id = req.params.id;
          const studentDonations = await Donation.findAll({
            include:[
              {model: Student, attributes: ['first_name', 'last_name']},
              {model: School, attributes: ['name']},
            ],
            attributes: [
              'id',
              'amount',
              'created_at',
            ],
            where: {
              student_id: id,
            }
          }) 
          if (studentDonations.length > 0) {
            res.status(200).json({data: studentDonations});
          } else {

            res.status(200).json({data: "empty"});

          }
  
      } catch (err) {
        console.error(err.message);
        res.status(500).json({
          status: 'Failed',
          message: 'Server error'
        })
      }
    }

  // Gets Donations by student for student who are logged in
  static async getDonationByStudent(req,res) {
    try {
      const donations = await Donation.findAll({
        attributes: [
          'id',
          'amount',
          'student_id',
          'school_id',
          'created_at', 
        ], 
         where: { 
          student_id: req.user.student.id, 
        },
      })
      console.log("something: ", donations);
      res.status(201).json({ donations })
    } catch(err) {
      console.log('-------------------')
      console.log(err);
      res.status(500).json({ error: err});       
    }

  }
}

module.exports = DonationController;
