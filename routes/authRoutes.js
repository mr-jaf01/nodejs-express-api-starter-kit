const express = require("express");
const authController = require("@controllers/authController");

const router = express.Router();

// Register route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

// Forgot password route
router.post("/forgot-password", authController.forgotPassword);

module.exports = router;
