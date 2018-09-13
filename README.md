bnbhostapi
======

I, David Plappert, am an Airbnb Superhost. I, also, want to be able to build tools to support my business, the way I want. Currently, I pay about $40 per month for tools that only do some of what I want. [SmartBnb](http://smartbnb.io), [Properly](http://getproperly.com), [QuickBooks](https://quickbooks.intuit.com/), and others are a good start. However, I want more control, customization and automation.

### This wrapper exposes API end points that allow you to:
- login to Airbnb and get an oauth token (this has to be frist before you do anything else)
- Get listings
- Get listing details
- Get messages
- Get message details
- Send messages
- Get calendar for a listing
- Update calendar for a listing (change prices, availbility, notes)
- get Payouts (used to get a list of reservations, past and future - also gives you exact $ for accounting)
- get reservation details
- get user details (info about your guests)

### To set this API up, follow these steps:
I assume you have node installed (nvm maybe?) and that you have a listing on AirBnb.
1) `npm install bnbhostapi` (or `git clone git@github.com:davidplappert/bnbhostapi.git && npm install`)
2) `export bnbhostapi_username='xxxxxxx'` (replace with your email)
3) `export bnbhostapi_password='xxxxxxx'` (replace with your password)
4) `node examples/login.js` (this generates a oauth token we need for the rest of the api calls)
5) `export bnbhostapi_oauthtoken = xxxxxx` (output from the above script)
6) `node examples/getPayouts.js` (to make sure your setup is correct).

### This following sippet will return all your payout info along with all the reservation info.

```
var bnbhostapi = require('bnbhostapi');
bnbhostapi.getPayouts(true).
each(function(payout){
  bnbhostapi.getReservation(payout['reservation']['confirmation_code'])
  .then(function(reservation){
    console.log(reservation);
  });
});
```

### Forward looking features:
- leave reviews
- charge for extra services
- stats and more details for reporting

## Credits:
- [Charles Proxy](https://www.charlesproxy.com/)
- [Postman](https://www.getpostman.com/)
- [airbnbapi.com](http://airbnbapi.com/)
- [airapi](https://github.com/phamtrisi/airapi)
