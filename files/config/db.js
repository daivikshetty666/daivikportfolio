let URI = "mongodb+srv://dbadmin:daivik666@cluster0.u6rvq.mongodb.net/mydb?retryWrites=true&w=majority"
//Database setup
let mongoose = require('mongoose');

module.exports = function()
{

    //create connection to the database
    mongoose.connect(URI);

    let mongoDB = mongoose.connection;

    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', ()=>{
    console.log('Connected to MongoDB...');
    });

    return mongoDB;

}