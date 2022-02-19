var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/julio', userController.julio);


//signup
router.get('/signup', userController.renderSignup);

//signin

module.exports = router;
