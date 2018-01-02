var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getListings().then(function(listings){
  var index;
  for (index = 0; index < listings.length; ++index) {
    var listing = listings[index];
    bnbhostapi.getListing(listing['id']).then(function(listing_detailed){
      console.log(listing_detailed);
    });
  }
});
