var request = require("request");
var promise = require('bluebird');
var config = require('../config');

function getCalendar(listing_id,start_date=null,end_date=null){
  //figure out date if none is put in
  var date = new Date();
  date.setDate(0);
  if (start_date == null){
    start_date = date.getFullYear() + '-' + ( '0' + parseInt(date.getMonth()+1)).slice(-2) + '-' + ( '0' + date.getDate()).slice(-2);
  }
  if (end_date == null){
    date.setMonth(date.getMonth() + 3);
    date.setDate(1);
    var end_date = date.getFullYear() + '-' + ( '0' + parseInt(date.getMonth()+1)).slice(-2) + '-' + ( '0' + date.getDate()).slice(-2);
  }
  var options = {
    method: 'GET',
    url: 'https://api.airbnb.com/v2/calendars/' + listing_id + '/' + start_date + '/' + end_date,
    headers:JSON.parse(JSON.stringify(config['bnbhostapi']['headers'])),
    qs: {
      '_format':'host_calendar_detailed',
    },
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
          resolve(body['calendar']);
        }
      }
    });
  });
}

module.exports = getCalendar;
