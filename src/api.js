const API = (function () {
  const API_KEY = "646F58SJD4EETAUKPMLB7BGX6";
  const getForecast = async function (location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}`;
    const response = await fetch(url);
    const forecastData = await response.json();
    return forecastData;
  };

  return { getForecast };
})();

export { API };
