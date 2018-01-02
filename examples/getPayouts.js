var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getPayouts(true).then(function(payouts){
  var index;
  for (index = 0; index < payouts.length; ++index) {
    var payout = payouts[index];
    bnbhostapi.getReservation(payout['reservation']['confirmation_code']).then(function(reservation){
      console.log(reservation);
    });
  }
});
