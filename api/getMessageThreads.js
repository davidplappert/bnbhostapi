var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function getMessageThreads(limit=50,offset=0,archived=false){
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/threads/',
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      _limit:limit,
      _offset:offset,
      selected_inbox_type:'host',
      _format:'for_messaging_sync',
      //include_support_messaging_threads:false
    },
    gzip: true,
  };
  if (archived){
    options['qs']['role'] = "hidden";
  }
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        if (body['error_code']){
          reject(body);
        }else{
          resolve(body['threads']);
        }
      }
    });
  });
}

module.exports = getMessageThreads;
