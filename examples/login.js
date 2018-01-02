var bnbhostapi = require('../bnbhostapi');

bnbhostapi.login().then(function(oauth_token){
  console.log(oauth_token);
});
