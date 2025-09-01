
const apiKey = "eb27436cd3fa579afe2e4346ffe1d452";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector('.weather-icon');

async function weatherData(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();
    console.log(data)
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humiditi').innerHTML = data.main.humidity + "%";
    document.querySelector('.Windspeed').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = 'image/clouds.png';
    }

    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = 'image/clear.png';
    }

    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = 'image/rain.png';
    }

     else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = 'image/drizzle.png';
    }

     else if(data.weather[0].main == "Mist") {
        weatherIcon.src = 'image/mist.png';
    }

     else if(data.weather[0].main == "Snow") {
        weatherIcon.src = 'image/snow.png';
    }


}

searchbtn.addEventListener('click' , () => {
    weatherData(searchbox.value);
})



