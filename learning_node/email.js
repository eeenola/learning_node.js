var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cixyapoudel123@gmail.com',
    pass: 'cixya123'
  }
});

var mailOptions = {
  from: 'cixyapoudel123@gmail.com',
  to: 'ceexyapoudel0916@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
