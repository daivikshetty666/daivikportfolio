let mongoose = require('mongoose');

// connect to model
let Inventory = require('../models/inventory');

exports.list = function(req, res, next){
    Inventory.find ( (err, inventoryList) => {

        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(inventoryList);
        }
    })
}
