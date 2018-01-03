var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getMessageThreads(50,0,false)
.each(function(message){
  console.log(message.id + ',' + message.other_user.first_name);
})
.catch(function(err){
  console.log(err);
});
