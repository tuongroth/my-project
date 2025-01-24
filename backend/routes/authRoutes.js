const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController');
const router = express.Router();

// Đăng ký người dùng
router.post('/register', registerUser);

// Đăng nhập
router.post('/login', loginUser);

module.exports = router;
