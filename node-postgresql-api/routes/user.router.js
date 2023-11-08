// routes/book.router.js
const express = require('express');
const router = express.Router();
const User_Controller = require('../controllers/user.controller');

router.get('/get_user_registration', User_Controller.get_User_Register);

router.post('/post_user_register', User_Controller.insert_User_Register);


module.exports = router;