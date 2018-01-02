/***

Be very careful when using this
Airbnb will only give you so many tokens per hour
once you get your token, set it in your env like this:

export bnbhostapi_oauthtoken='XXXXXXXXXXXXXX'

this token should last for a while, say 3 months

**/

var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function login(){
  var options = {
    method: 'POST',
    url: 'https://api.airbnb.com/v1/authorize',
    headers: JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    gzip: true,
    form: {
      grant_type: 'password',
      password: config['bnbhostapi']['password'],
      username: config['bnbhostapi']['username'],
    }
  };
  options['headers']['Content-Type'] = 'application/x-www-form-urlencoded';
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        //body = JSON.parse(body);
        resolve(body)
        //['access_token'];
      }
    });
  });
}

module.exports = login;
