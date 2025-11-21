import { API } from "./api.js";

const weatherData = {
  conditions: "Sunny",
  feelslike: 20,
  humidity: 80,
  temp: 30,
};

const searchBtn = document.getElementById("search-button");
const searchBox = document.getElementById("search-location");
const weatherInfoDiv = document.getElementById("weather-info");
searchBtn.addEventListener("click", (event) => {
  // console.log(searchBox.value);
  Object.entries(weatherData).forEach(([key, value]) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList = key;
    itemDiv.innerHTML = value;
    weatherInfoDiv.appendChild(itemDiv);
  });
});

// API.getForecast("Indonesia");
