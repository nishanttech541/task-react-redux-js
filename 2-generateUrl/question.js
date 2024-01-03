// Create a function `generateUrl` to generate a URL from the given parameters:

/*
{

width: 360,

height: 300,

locale: 'en',

toolbar_bg: '',

interval: '3h',

pair: 'BTC_USD',

}
*/
// You can use any lib but the generated result should be

// "http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360"

// More parameters are planned to be added/removed later and the result should neglect the empty params (ex: should not include toolbar_bg in URL when its value is empty).
