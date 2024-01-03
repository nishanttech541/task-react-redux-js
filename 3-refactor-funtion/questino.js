// 3) Apply some refactoring to improve the code of the following function. Explain the reasons behind your changes and which benefit they bring into the code.

var volumeSetup = function () {
  // setup volume unit interface

  var volumeUnit = window.APP.util.getSettings("ticker_vol_unit").toUpperCase();

  var element = null;

  if (volumeUnit === "FIRSTCCY") {
    element = $("#tickervolccy_0");
  } else if (volumeUnit === "USD") {
    element = $("#tickervolccy_USD");
  } else if (volumeUnit === "BTC") {
    element = $("#tickervolccy_BTC");
  } else if (volumeUnit === "ETH") {
    element = $("#tickervolccy_ETH");
  }

  if (element) {
    element.prop("checked", true);
  }

  // override currencies list

  var result = window.APP.util.initCurrenciesList();

  return result;
};
