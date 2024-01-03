function generateUrl(params) {
  let baseUrl = "http://testurl.bitfinx.com/?";

  const sortedKeys = Object.keys(params)?.sort();

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
