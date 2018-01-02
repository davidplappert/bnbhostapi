var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function getMessageThread(thread_id,limit=50,offset=0){
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/threads/' + thread_id,
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      _limit:limit,
      _ofset:offset,
      selected_inbox_type: 'host',
      _format: 'for_messaging_sync_with_posts'
    },
    gzip: true,
  };
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        resolve(body['thread']);
      }
    });
  });
}

module.exports = getMessageThread;
