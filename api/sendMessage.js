var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function sendMessage(thread_id, message){
  var options = {
    method: 'POST',
    url: 'https://api.airbnb.com/v2/messages',
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    body: JSON.stringify({
      "message":message,
      "thread_id":thread_id
    }),
    gzip: true,
  };
  console.log(options);
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        resolve(body);
      }
    });
  });
}

module.exports = sendMessage;
