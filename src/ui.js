const UI = (function () {
  const elements = {
    weatherInfo: document.getElementById("weather-info"),
  };

  const renderData = (weatherData) => {
    elements.weatherInfo.innerHTML = "";
    const cityName = document.createElement("div");
    const conditions = document.createElement("div");
    const feelsLike = document.createElement("div");
    const humidity = document.createElement("div");
    const temp = document.createElement("div");

    cityName.textContent = `City: ${weatherData.address}`;
    conditions.textContent = `Conditions: ${weatherData.currentConditions.conditions}`;
    feelsLike.textContent = `Feels like: ${weatherData.currentConditions.feelslike}`;
    humidity.textContent = `Humidity: ${weatherData.currentConditions.humidity}`;
    temp.textContent = `Temp: ${weatherData.currentConditions.temp}`;

    for (const item of [cityName, conditions, feelsLike, humidity, temp]) {
      elements.weatherInfo.appendChild(item);
    }
  };

  return { renderData };
})();

export { UI };
