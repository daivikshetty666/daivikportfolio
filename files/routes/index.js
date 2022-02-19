/* 
Name : Daivik Shetty
Student Id: 301167163
*/
let express = require('express');
let router = express.Router();
let mainController = require('../controllers/index');

/* GET home page. */
router.get('/', mainController.home);

/* GET home page. */
router.get('/home', mainController.home);

/* GET About Us page. */
router.get('/about', mainController.about);

/* GET Products page. */
router.get('/project', mainController.projects);

/* GET Services page. */
router.get('/services', mainController.services);

/* GET Contact Us page. */
router.get('/contact', mainController.contact);

module.exports = router;
