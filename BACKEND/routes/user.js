const express = require('express');
const router = express.Router();


const {login, signup} = require('../controllers/Auth');

// router.post('/login', login);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;