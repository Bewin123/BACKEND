const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Your email address
    pass: "your-password", // Your email password
  },
});

// Function to send password reset email
const emailService = {
  sendPasswordResetEmail: (email, resetLink) => {
    // Email options
    const mailOptions = {
      from: "your-email@gmail.com",
      to: email,
      subject: "Password Reset Link",
      html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  },
};

module.exports = emailService;
