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
                    title: 'Business Contact List',
                    InventoryList: inventoryList
                }
            );
        }
    })
}

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Inventory();

    res.render(
        'inventory/add_edit', 
        {
            title: 'Add New Business Contact',
            item: newItem
        }
    )          
}


module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Inventory({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the list
            console.log(item);
            res.redirect('/inventory/list');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Inventory.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render(
                'inventory/add_edit', 
                {
                    title: 'Edit Business Contact', 
                    item: itemToEdit
                }
            )
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Inventory({
        _id: id,
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email
    });

    // console.log(updatedItem);

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the list
            res.redirect('/inventory/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the list
            res.redirect('/inventory/list');
        }
    });
}
