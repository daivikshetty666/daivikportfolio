let express = require('express');
let router = express.Router();
let inventoryController = require('../controllers/inventory')

/* GET Inventory page. */
router.get('/list', inventoryController.list);

//get method to render the add items page
router.get('/add', inventoryController.displayAddPage);
//post method to handle the add item process
router.post('/add', inventoryController.processAddPage);

//get method to render the update items page
router.get('/edit/:id', inventoryController.displayEditPage);
//post method to handle the update items page
router.post('/edit/:id', inventoryController.processEditPage);

//processs delete list
router.get('/delete/:id', inventoryController.performDelete);

module.exports = router;