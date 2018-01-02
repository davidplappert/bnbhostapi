var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function getListings(listing_id){
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/listings/' + listing_id,
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      '_format':'v1_legacy_long_manage_listing',
    },
    gzip: true,
  };
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        resolve(body['listing']);
      }
    });
  });
}

module.exports = getListings;
