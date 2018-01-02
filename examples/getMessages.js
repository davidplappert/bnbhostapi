var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getMessageThreads().then(function(messages){
  var index;
  for (index = 0; index < messages.length; ++index) {
    var message = messages[index];
    bnbhostapi.getMessageThread(message['id']).then(function(message_detailed){
      console.log(message_detailed);
    });
  }
});
