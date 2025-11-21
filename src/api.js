const API = (function () {
  const API_KEY = "646F58SJD4EETAUKPMLB7BGX6";
  const getForecast = async function (location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}`;
    const response = await fetch(url);
    const forecastData = await response.json();
    const subsetData = {
      conditions: forecastData.currentConditions.conditions,
      feelslike: forecastData.currentConditions.feelslike,
      humidity: forecastData.currentConditions.humidity,
      temp: forecastData.currentConditions.temp,
    };
    console.log(subsetData);
    // return forecastData;
  };

  return {
    getForecast,
  };
})();

export { API };
