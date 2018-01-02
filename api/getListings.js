var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function getListings(limit=50,offset=0){
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/listings/',
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      '_limit':limit,
      '_offset':offset,
      '_format':'for_manage_listing_app_pending',
      'has_availability':false,
      'user_id': config['bnbhostapi']['user_id']
    },
    gzip: true,
  };
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        resolve(body['listings']);
      }
    });
  });
}

module.exports = getListings;
