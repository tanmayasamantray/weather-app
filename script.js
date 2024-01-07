const apiKey = "8a4c3eb28c1dcdf55391986bb98ffce6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "images/clouds.png"
        document.querySelector(".desc").innerHTML = data.weather[0].description;
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "images/clear.png"
        document.querySelector(".desc").innerHTML = data.weather[0].description;
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "images/drizzle.png"
        document.querySelector(".desc").innerHTML = data.weather[0].description;
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "images/mist.png"
        document.querySelector(".desc").innerHTML = data.weather[0].description;
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png"
        document.querySelector(".desc").innerHTML = data.weather[0].description;
    }
    else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = "images/snow.png"
        document.querySelector(".desc").innerHTML = data.weather[0].description;
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})