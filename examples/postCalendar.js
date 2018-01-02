var bnbhostapi = require('../bnbhostapi');

bnbhostapi.postCalendar('18412320', '2018-12-31', 555, true, true).then(function(cal_op){
  console.log(cal_op.calendar_operation.days);
});
