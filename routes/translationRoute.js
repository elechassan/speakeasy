const express = require('express');
const translationController = require('../controllers/translationController');
require('isomorphic-fetch');

const translationRoute = express.Router();

translationRoute.post('/', translationController.translate);

module.exports = translationRoute;