
const apiKey = "eb27436cd3fa579afe2e4346ffe1d452";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=sagar&units=metric";

async function weatherData() {
    const responce = await fetch(apiUrl+`&appid=${apiKey}`);
    var data = await responce.json();
    console.log(data)
    
}

weatherData();