const nodemailer = require("nodemailer");

function senddata(req, res, next) {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kmnandhu.priya@gmail.com",
      pass: "rfksuqmaglejlggh", // smtp pwd
    },
  });

  var mailOptions = {
    from: "kmnandhu.priya@gmail.com",
    to: email,
    subject: subject,
    message: message,
  };

  transporter.senddata(mailOptions, function (error, info) {
    if (error) {
      console.error("Error while sending email:", error);
      res.status(500).send("Error occured");
    } else {
      console.log("Email Sent: ", info.response);
      res.send("Email Sent successfully");
    }
  });

  next();
}
module.exports = { senddata };
