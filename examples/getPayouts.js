var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getPayouts(true).
each(function(payout){
  bnbhostapi.getReservation(payout['reservation']['confirmation_code'])
  .then(function(reservation){
    console.log(reservation);
  }).catch(function(err){
    console.log('error', err);
  });
}).catch(function(err){
  console.log('error', err);
});
