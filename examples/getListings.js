var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getListings()
.each(function(listing){
  bnbhostapi.getListing(listing['id'])
  .then(function(listing_detailed){
    console.log(listing_detailed);
  }).catch(function(err){
    console.log('error', err);
  });
}).catch(function(err){
  console.log('error', error);
});
