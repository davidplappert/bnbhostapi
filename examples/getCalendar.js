var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getCalendar('18412320')
.then(function(calendar){
  console.log(calendar);
}).catch(function(err){
  console.log('error', err);
});
