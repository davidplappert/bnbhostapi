var bnbhostapi = {
  username: process.env.bnbhostapi_username,
  password: process.env.bnbhostapi_password,
  user_id: process.env.bnbhostapi_userid,
  headers: {
    'cache-control': 'no-cache',
    'user-agent': 'Airbnb/17.50 iPad/11.2.1 Type/Tablet',
    'accept': 'application/json',
    'accept-encoding': 'br, gzip, deflate',
    'accept-language': 'en',
    'x-airbnb-oauth-token': process.env.bnbhostapi_oauthtoken,
    'x-airbnb-api-key': '915pw2pnf4h1aiguhph5gc5b2',
    'x-airbnb-locale': 'en',
    'x-airbnb-currency': 'USD',
  }
}

module.exports = {
  bnbhostapi:bnbhostapi,
}
