const express = require('express');
const phrasesController = require('../controllers/phrasesController');

const phrasesRoutes = express.Router();

phrasesRoutes.get('/', phrasesController.index);
phrasesRoutes.get('/:id', phrasesController.show);
phrasesRoutes.post('/', phrasesController.create);
phrasesRoutes.put('/:id', phrasesController.update);
phrasesRoutes.delete('/:id', phrasesController.destroy);

module.exports = phrasesRoutes;