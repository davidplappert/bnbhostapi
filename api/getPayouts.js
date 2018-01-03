var request = require("request");
var promise = require('bluebird');
var config = require('../config');

/**
Sending pending true to get future payouts, false to get past payouts

limit max is 20
**/

function getPayouts(pending=null,limit=20,offset=0){
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/payouts/',
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      '_limit':limit,
      '_offset':offset,
      '_format':'for_mobile_transaction_history',
      'pending':pending,
    },
    gzip: true,
  };
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        if (body['error_code']){
          reject(body);
        }else{
          resolve(body['payouts']);
        }
      }
    });
  });
}

module.exports = getPayouts;
