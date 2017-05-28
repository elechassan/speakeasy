const express = require('express');
const usersController = require('../controllers/authController');
const phraseController = require('../controllers/phrasesController'
)
const usersRoutes = express.Router();

// usersRoutes.get('/', (req, res) => {
//     console.log(`req.user = ${req.user}`);
//     console.log(req.session)
//     res.json({ message: 'logged in!'});
// });

// usersRoutes.get('/phrases', phraseController.index);

module.exports = usersRoutes;