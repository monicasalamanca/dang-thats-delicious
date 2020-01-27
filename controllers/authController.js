const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'failed Login!',
  successRedirect: '/',
  successFlash: 'You are now logged in!'
});