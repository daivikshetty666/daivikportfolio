let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

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
            //console.log(inventoryList);
            res.render(
                'inventory/list', 
                { 
                    title: 'Inventory List',
                    InventoryList: inventoryList
                }
            );
        }
    })
}
