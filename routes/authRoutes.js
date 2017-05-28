const express = require('express');
const authController = require('../controllers/authController');

const authRoutes = express.Router();

const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

function test(req, res, next) {
    console.log('testing', req.user)
    next();
}

authRoutes.get('/login', (req, res) => {
  res.json({message: 'no good brah'});
})

authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

authRoutes.post('/register', authController.create);

authRoutes.post('/login', test,
  passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/auth/login',
    failureFlash: false,
  })
);

module.exports = authRoutes;