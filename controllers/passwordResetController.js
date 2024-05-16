const User = require("../models/User");
const emailService = require("../services/emailService");

const passwordResetController = {
  forgetPassword: async (req, res) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const randomString = generateRandomString();
      user.passwordResetToken = randomString;
      await user.save();

      const resetLink = `http://yourwebsite.com/reset-password?token=${randomString}`;
      emailService.sendPasswordResetEmail(user.email, resetLink);

      return res
        .status(200)
        .json({ message: "Password reset link sent to your email." });
    } catch (error) {
      console.error("Error in forgetPassword controller:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  },

  resetPassword: async (req, res) => {
    const { token, newPassword } = req.body;

    try {
      const user = await User.findOne({ passwordResetToken: token });

      if (!user) {
        return res.status(404).json({ message: "Invalid or expired token." });
      }

      user.password = newPassword;
      user.passwordResetToken = undefined;
      await user.save();

      return res.status(200).json({ message: "Password reset successful." });
    } catch (error) {
      console.error("Error in resetPassword controller:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  },
};

function generateRandomString() {
  // Logic to generate a random string
}

module.exports = passwordResetController;
