const express = require('express');
const usersController = require('../controllers/authController');
const usersRoutes = express.Router();

const passport = require('../services/auth/passport');

usersRoutes.get('/', (req, res) => {
    console.log(`req.user = ${req.user}`);
    console.log(req.session)
    res.json({ message: 'logged in!'});
});

module.exports = usersRoutes;