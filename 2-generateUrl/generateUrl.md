### Question

> ##### Create a function `generateUrl` to generate a URL from the given parameters:

```javascript

{

width: 360,

height: 300,

locale: 'en',

toolbar_bg: '',

interval: '3h',

pair: 'BTC_USD',

}

```

##### You can use any lib but the generated result should be

```bash

"http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360"

```

More parameters are planned to be added/removed later and the result should neglect the empty params (ex: should not include toolbar_bg in URL when its value is empty).

### Soution

```javascript

function generateUrl(params) {
  let baseUrl = "http://testurl.bitfinx.com/?";

  const sortedKeys = Object.keys(params).sort();

  for (let key of sortedKeys) {
    if (params[key] !== "" && params[key] !== undefined) {
      baseUrl += `${key}=${params[key]}&`;
    }
  }

  return baseUrl.slice(0, -1);
}

const params = {
  width: 360,
  height: 300,
  locale: "en",
  toolbar_bg: "",
  interval: "3h",
  pair: "BTC_USD",
};

const res = generateUrl(params);

console.log(res);

```

### output is :

```bash
http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360
```
