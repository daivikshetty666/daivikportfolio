let User = require('../models/user');
let passport = require('passport');

exports.user = function(req, res, next) {
    res.render('user', { 
        title: 'Users',
        name: 'Student'
    });
}

exports.julio = function(req, res, next) {
    res.render('user', { 
        title: 'User',
        name: 'Daivik'
    });
}
// error message handler during  registering
function getErrorMessage(err) {
    console.log("===> Erro: " + err);
    let message = '';
  
    if (err.code) {
      switch (err.code) {
        case 11000:
        case 11001:
          message = 'Username taken';
          break;
        default:
          message = 'Oops.Something went wrong';
      }
    } else {
      for (var errName in err.errors) {
        if (err.errors[errName].message) message = err.errors[errName].message;
      }
    }
  
    return message;
  };

  module.exports.renderSignup = function(req, res, next) {
    if (!req.user) {
  
      // creates a empty new user object.
      let newUser = User();
  
      res.render('auth/signup', {
        title: 'Sign-up Form',
        messages: req.flash('error'),
        user: newUser
      });
  
    } else {
      return res.redirect('/');
    }
  };