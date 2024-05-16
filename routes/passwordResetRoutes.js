const express = require("express");
const router = express.Router();
const passwordResetController = require("../controllers/passwordResetController");

// Routes for password reset
router.post("/forget-password", passwordResetController.forgetPassword);
router.post("/reset-password", passwordResetController.resetPassword);

module.exports = router;
