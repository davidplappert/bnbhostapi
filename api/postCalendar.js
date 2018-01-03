var request = require("request");
var promise = require('bluebird');
var config = require('../config');

/*

single date: date = '2018-12-31'
date range: date = '2018-12-30:2018-12-31'

*/

function postCalendar(listing_id, date, daily_price=null, smart_pricing_override=null, available=null, notes=null){
  var operations = [];
  if (smart_pricing != null){
    operations.push({
      "dates":[date],
      "demand_based_pricing_overridden":smart_pricing_override
    });
    if (!smart_pricing){
      if (daily_price != null){
        operations.push({
          "dates":[date],
          "daily_price":daily_price
        });
      }
    }
  }
  if (available != null){
    var av;
    if (available){
      av = 'available'
    }else{
      av = 'unavailable_persistent'
    }
    operations.push({
      "dates":[date],
      "availability":av
    });
  }
  if (notes != null){
    operations.push({
      "dates":[date],
      "notes":notes
    });
  }
  var options = {
    method: 'POST',
    url: 'https://api.airbnb.com/v2/calendar_operations/',
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      '_allow_dates_overlap':true,
    },
    body: JSON.stringify({
      "operations":operations,
      "listing_id":listing_id,
      "method":"UPDATE"
    }),
    gzip: true,
  };
  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (error){
        reject(error);
      }else{
        body = JSON.parse(body);
        if (body['error_code']){
          reject(body);
        }else{
          resolve(body);
        }
      }
    });
  });
}

module.exports = postCalendar;
