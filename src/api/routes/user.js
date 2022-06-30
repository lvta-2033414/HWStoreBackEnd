const express = require('express');
const router = express.Router();

const { login, registerUser } = require('../controllers/user.js');

router.route('/register').post(registerUser);
router.route('/login').post(login);

module.exports = router;
