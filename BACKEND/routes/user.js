const express = require('express');
const router = express.Router();


const {login, signup} = require('../controllers/Auth');

// router.post('/login', login);
router.post('/signup', signup);
router.post('/login', login);
// router.get('/getdata', getdata);
// router.post('/resetpass', resetpass);
// router.post('/resetpass/token', tokenverify);

module.exports = router;