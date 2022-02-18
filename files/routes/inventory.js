let express = require('express');
let router = express.Router();
let inventoryController = require('../controllers/inventory')

/* GET Inventory page. */
router.get('/', inventoryController.list);

  
module.exports = router;