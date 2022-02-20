let express = require('express');
let router = express.Router();
let inventoryController = require('../controllers/inventory')

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET Inventory page. */
router.get('/list', inventoryController.list);

//get method to render the add items page
router.get('/add', requireAuth,inventoryController.displayAddPage);
//post method to handle the add item process
router.post('/add',requireAuth, inventoryController.processAddPage);

//get method to render the update items page
router.get('/edit/:id',requireAuth, inventoryController.displayEditPage);
//post method to handle the update items page
router.post('/edit/:id',requireAuth, inventoryController.processEditPage);

//processs delete list
router.get('/delete/:id',requireAuth, inventoryController.performDelete);

module.exports = router;