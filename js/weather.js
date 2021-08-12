const API_KEY = "ba1f2d73c2111e87fa5ddfe976a57980";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} , ${data.main.temp}°C, `;
            city.innerText = data.name;
             if (data.weather[0].main === `Rainy`) {
                weather.innerText = `🌧 ${data.main.temp}°C / `;
            } else if (data.weather[0].main === `Clouds`) {
                weather.innerText = `☁️ ${data.main.temp}°C / `;
            }
        }
    );
}
function onGeoError() {
    alert("No Location!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);