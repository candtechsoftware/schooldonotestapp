require("dotenv").config();
const nodemailer = require("nodemailer");
const sendMail = (emailTo, subject, content) => {
  console.log('in send mail ');
  try {
    const transporter = nodemailer.createTransport({
      host: 'secure195.servconfig.com',
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.EMAIL_ADDRESS}`,
        pass: `${process.env.EMAIL_PASSWORD}`
      }
    })  
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: `${emailTo}`,
      subject: `${subject}`,
      html: `${content}`

    }
    return transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error('Error in sending the mail', err);
      } else {
        console.log('Response: ', response);
      }
    })
  }
   catch(err){
    console.log('eror in send mail', err);
  }

}


module.exports = sendMail; 