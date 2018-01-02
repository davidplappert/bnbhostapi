var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function getReservation(confirmation_code){
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/reservations/' + confirmation_code,
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      '_format':'for_mobile_host',
    },
    gzip: true,
  };
  return new Promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        resolve(body['reservation']);
      }
    });
  });
}

module.exports = getReservation;
