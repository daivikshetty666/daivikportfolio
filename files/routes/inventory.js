let express = require('express');
let router = express.Router();
let inventoryController = require('../controllers/inventory')

/* GET Inventory page. */
router.get('/list', inventoryController.list);

//post method to render the update items page

router.get('/add', inventoryController.displayAddPage);
//post method to handle the update item process
router.post('/add', inventoryController.processAddPage);

//process delete items method
router.get('/edit/:id', inventoryController.displayEditPage);
module.exports = router;