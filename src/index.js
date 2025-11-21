import { API } from "./api.js";
import { UI } from "./ui.js";

const searchBtn = document.getElementById("search-button");
const searchBox = document.getElementById("search-location");
searchBtn.addEventListener("click", async () => {
  if (searchBox.value === "") return;
  const weatherData = await API.getForecast(searchBox.value);
  UI.renderData(weatherData);
});
