/* 
Name : Daivik Shetty
Student Id: 301167163

contoller file
*/

let express = require('express');
let router = express.Router();

exports.home = function(req, res, next){
    res.render('index', {
        title: 'Home',
        userName: req.user ? req.user.username : '' 
    });
}
exports.about = function(req, res, next){
    res.render('index', {
        title: 'About Me',
        userName: req.user ? req.user.username : ''});
}

exports.projects = function(req, res, next){
    res.render('index', {
        title: 'Projects',
        userName: req.user ? req.user.username : ''});
}

exports.services = function(req, res, next){
    res.render('index', {
        title: 'Services',
        userName: req.user ? req.user.username : ''});
}

exports.contact = function(req, res, next){
    res.render('index', {
        title: 'Contact Me',
        userName: req.user ? req.user.username : ''});
}

