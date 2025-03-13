//create dom elements
let weatherIcon = document.querySelector("#weather-icon");
let weatherTemp = document.querySelector("#weather-temp");
let weatherDesc = document.querySelector("#weather-description");

console.log("javascript connected!");

const carousel = new bootstrap.Carousel("#homeCarousel", {
  interval: 2750,
  pause: false,
});

// when the pause button is clicked, pause the carousel
const carouselPause = document.getElementById("carouselPause");
const faIcon = document.getElementById("faButton");

carouselButton.addEventListener("click", function () {
  if (faIcon.classList.contains("fa-pause")) {
    faIcon.classList.remove("fa-pause");
    faIcon.classList.add("fa-play");
    carousel.pause();
  } else {
    faIcon.classList.remove("fa-play");
    faIcon.classList.add("fa-pause");
    carousel.cycle();
  }
});

async function fetchWeather() {
  try {
    const city = "London";
    const apiKey = "2523010d2f26145cecb3bc11cf361681";

    console.log(apiKey);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    console.log("After 10,000 years I'm free");
  }
}
function displayWeather(weatherData) {
  const imageIcon = document.createElement("img");
  //variable for weather condition
  const icon = weatherData.weather[0].icon;
  const unit = "\u00B0F"; //unicode escape sequence for degree symbol
  console.log(`This is the icon ${icon}`);
  //change src on imageIcon to url using the icon data for weather condition
  imageIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  imageIcon.classList.add("img-fluid", "custom-icon");
  weatherIcon.appendChild(imageIcon);
  //set value to temp unit + degree fahrenheit symbol
  weatherTemp.textContent = weatherData.main.temp + unit;
  console.log(weatherData.weather[0].description);
  weatherDesc.textContent = weatherData.weather[0].description;
}
fetchWeather();
