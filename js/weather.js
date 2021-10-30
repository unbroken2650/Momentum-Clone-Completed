const API_KEY = "7a7a11d8ed298c41291b45a78be8c8aa";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherContainer = document.querySelector("#weather span");
      const currentTemp = data.main.temp.toFixed(1);
      weatherContainer.innerText = `${data.weather[0].description} / ${currentTemp}°C / ${data.main.humidity}% / ${data.name}`;
    });
}

function onGeoError() {
  //alert("당신의 위치를 찾을 수 없습니다. 😥");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
