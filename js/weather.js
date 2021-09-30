const API_KEY = "7a7a11d8ed298c41291b45a78be8c8aa";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("You live in ", latitude, longitude);
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(weatherURL)
  .then(response => response.json())
  .then(data => {
    const weatherContainer = document.querySelector("#weather span:first-child");
    const cityContainer = document.querySelector("#weather span:last-child");
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    cityContainer.innerText = data.name;
  });
}

function onGeoError() {
  alert("Can't find your location. No weather for you. 😥")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);