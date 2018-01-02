var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function getUser(user_id){
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/users/' + user_id,
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      '_format':'with_content_framework_articles'
    },
    gzip: true,
  };
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        resolve(body['user']);
      }
    });
  });
}

module.exports = getUser;
