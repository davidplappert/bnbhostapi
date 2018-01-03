var bnbhostapi = require('../bnbhostapi');

bnbhostapi.sendMessage("335989904", "test from api")
.then(function(message){
  console.log(message);
}).catch(function(err){
  console.log('error', err);
});
