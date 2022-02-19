let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        name: String,
        contact: Number,
        email: String,
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('inventory', inventoryModel);