var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/julio', userController.julio);


//signup get method
router.get('/signup', userController.renderSignup);
//signup post method
router.post('/signup', userController.signup);

//signin get method
router.get('/signin', userController.renderSignin);
//signup post method
router.post('/signin', userController.signin);

//signout get method
router.get('/signout', userController.signout);



module.exports = router;
