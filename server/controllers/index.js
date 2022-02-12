/* 
Name : Daivik Shetty
Student Id: 301167163

contoller file
*/

let express = require('express');
let router = express.Router();

exports.home = function(req, res){
    res.render('index', {title: 'Home'});
}
exports.about = function(req, res){
    res.render('index', {title: 'About Me'});
}

exports.projects = function(req, res){
    res.render('index', {title: 'Projects'});
}

exports.services = function(req, res){
    res.render('index', {title: 'Services'});
}

exports.contact = function(req, res){
    res.render('index', {title: 'Contact Me'});
}

