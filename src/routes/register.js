const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/user.js');

router.route('/').post(registerUser);

module.exports = router;
