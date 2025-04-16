const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { register, login, resetPassword } = require("../controllers/authController");

router.post("/register", [
  check("email", "Valid email required").isEmail(),
  check("password", "Password must be 6+ chars").isLength({ min: 6 })
], register);

router.post("/login", login);

router.post("/reset-password", [
  check("email", "Email required").isEmail(),
  check("newPassword", "Password must be 6+ chars").isLength({ min: 6 })
], resetPassword);

module.exports = router;
