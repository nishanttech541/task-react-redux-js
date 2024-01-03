const elementId = {
  FIRSTCCY: "#tickervolccy_0",
  USD: "#tickervolccy_USD",
  BTC: "#tickervolccy_BTC",
  ETH: "#tickervolccy_ETH",
};

const volumeSetup = () => {
  // Setup volume unit interface
  const volumeUnit = window.APP.util
    .getSettings("ticker_vol_unit")
    .toUpperCase();

  const element = $(elementId[volumeUnit]);

  if (element) element.prop("checked", true);

  return window.APP.util.initCurrenciesList();
};
