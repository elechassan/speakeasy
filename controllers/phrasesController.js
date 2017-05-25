const Phrases = require('../models/Phrases');

const phrasesController = {};

phrasesController.index = (req, res) => {
  console.log('in controller');
  Phrases.findAll()
    .then(phrases => {
      res.json({ 
        message: 'ok',
        data: { phrases },
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
      phrases: req.body.tweed,
      time: Date.now(),
    })
    .then(tweed => {
      res.json({message: 'ok', data: { tweed }});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

phrasesController.update = (req, res) => {
  Phrases.update({
    phrases: req.body.phrases,
  }, req.params.id)
    .then(phrases => {
      res.json({
        message: 'ok',
        data: { phrases },
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