const Translate = require('@google-cloud/translate');
const Speech = require('@google-cloud/speech');
const speech = Speech();

const translationController = {};
const projectId = 'translation-app-168502';

translationController.recognize = (req, res) => {

  var rec = require('node-record-lpcm16')//"borrowed" from https://www.npmjs.com/package/node-record-lpcm16#options 
  var request = require('request')
  
  var witToken = process.env.WIT_TOKEN;

  exports.parseResult = (err, resp, body) => {
    res.json(body);
  }
  
 if (req.body.status === 'go') {
  rec.start().pipe(request.post({
    'url'     : 'https://api.wit.ai/speech?client=chromium&lang=en-us&output=json',
    'headers' : {
      'Accept'        : 'application/vnd.wit.20160202+json',
      'Authorization' : 'Bearer ' + witToken,
      'Content-Type'  : 'audio/wav'
    }
  }, exports.parseResult))
 }

 if (req.body.status === 'stop') {
  rec.stop()
 }
}


// translationController.recognize = (req, res) => {

// var record = require('node-record-lpcm16')
// var fs = require('fs')
// var request = require('request')
// var witToken = process.env.WIT_TOKEN;

// exports.parseResult = (err, resp, body) => {
//   console.log(body);
// }
 
// if (req.body.status === 'go') {
//   console.log('in go');
//   var file = fs.createWriteStream('test.wav', { encoding: 'binary' })
//   record.start().pipe(file);
// } else if (req.body.status === 'stop') {
//   console.log('in stop');
//   record.stop()
//   request.post({
//       'url'     : 'https://api.wit.ai/speech?client=chromium&lang=en-us&output=json',
//       'headers' : {
//         'Accept'        : 'application/vnd.wit.20160202+json',
//         'Authorization' : 'Bearer ' + witToken,
//         'Content-Type'  : 'audio/wav'
//       },
//       'body': JSON.stringify(file)
//   }, exports.parseResult)
// }
// }






    // const speechClient = speech({
    //   projectId: projectId
    // });
    // let audio = req.body.audio;
    // console.log('audio content!');
    // console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
    // console.log(audio.content);
    // let config = req.body.config;
    // speechClient.recognize(audio, config).then(function(data) {
    // var results = data[0];
    // var apiResponse = data[1];
    // console.log(apiResponse);





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