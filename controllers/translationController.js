const Translate = require('@google-cloud/translate');

const translationController = {};
const projectId = 'translation-app-168502';

translationController.translate = (req, res) => {
const translateClient = Translate({
  projectId: projectId
});
const text = req.body.text;
const lang = req.body.lang;
translateClient.translate(text, lang)
  .then((results) => {
    const translation = results[0];
    res.json({message: 'worked', data: {translation: translation, source: lang}})
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
}


module.exports = translationController;