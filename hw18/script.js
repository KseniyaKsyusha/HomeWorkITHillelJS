"use strict";
//debugger;
const APIkey = "5d066958a60d315387d9492393935c19";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
    },
    (e) => {
      switch (e.code) {
        case e.PERMISSION_DENIED:
          alert("Користувач не дозволив визначити місце розташування.");
          break;
        case e.TIMEOUT:
          alert(
            "Час очікування браузером на визначення місця розташування минув."
          );
          break;
        case e.POSITION_UNAVAILABLE:
          alert("Інформація про місце  розташування недоступна.");
          break;
        case e.UNKNOWN_ERROR:
          alert("Виникла невідома помилка визначення місця розташування.");
          break;
        default:
          alert("Error.code: " + e.code + " Error.message: " + e.message);
          break;
      }
    }
  );
} else {
  alert("Ваш браузер НЕ підтримує геолокацію.");
}

function getWeather(lat, lon) {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric&lang=en`;
  console.log(requestUrl);

  fetch(requestUrl)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      const imgURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      document.getElementById("city").innerText = data.name;
      document.getElementById("description").innerText = data.weather[0].description;
      document.getElementById("icon").innerHTML = `<img src="${imgURL}" alt="Малюнок">`;
      document.getElementById("temp").innerText = data.main.temp;
      document.getElementById("pressure").innerText = data.main.pressure;
      document.getElementById("humidity").innerText = data.main.humidity;
      document.getElementById("speed").innerText = data.wind.speed;
      document.getElementById("deg").innerText = data.wind.deg;
    });
}
