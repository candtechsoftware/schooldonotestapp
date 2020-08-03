require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (emailTo, subject, content) => {
  console.log('in send mail ');
  try {
    const data = {
      to: emailTo,
      from: process.env.FROM_EMAIL,
      subject,
      html: content,
    };

    return sgMail.send(data);
  
  } catch(err){
    console.log('eror in send mail', err);
  }

}


module.exports = sendMail; 