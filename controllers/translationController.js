const Translate = require('@google-cloud/translate');

const translationController = {};
const projectId = 'translation-app-168502';

translationController.translate = (req, res) => {
const translateClient = Translate({
  projectId: projectId
});
const text = req.body.text;
const options = {
  from: req.body.langFrom,
  to: req.body.langTo,
};
translateClient.translate(text, options)
  .then((results) => {
    const translation = results[0];
    res.json({message: 'worked', data: {translation: translation, source: options.from, target: options.to}})
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
}


module.exports = translationController;