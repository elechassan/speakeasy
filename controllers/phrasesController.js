const Phrases = require('../models/Phrases');

const phrasesController = {};

phrasesController.index = (req, res) => {
  Phrases.findAll()
    .then(phrases => {
      res.json({ 
        message: 'ok',
        data: phrases ,
      });
    })
    .catch(err => {
      console.log('errorrrrr')
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

phrasesController.show = (req, res) => {
  Phrases.findById(req.params.id)
    .then(phrases => {
      res.json({
        message: 'ok',
        data: { phrases },
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

phrasesController.create = (req, res) => {
  Phrases.create({
      phrase: req.body.phrase,
      language: req.body.language
    })
    .then((phrase) => {
      console.log(phrase)
      res.json({message: 'ok', data: phrase});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

phrasesController.update = (req, res) => {
  Phrases.update({
    phrase: req.body.phrase,
    language: req.body.language
  }, req.params.id)
    .then(phrase => {
      res.json({
        message: 'ok',
        data: { phrase },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

phrasesController.destroy = (req, res) => {
  Phrases.destroy(req.params.id)
    .then(() => {
      res.json({message: 'phrase deleted'});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports = phrasesController;