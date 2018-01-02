var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getCalendar('18412320').then(function(calendar){
  console.log(calendar);
});
