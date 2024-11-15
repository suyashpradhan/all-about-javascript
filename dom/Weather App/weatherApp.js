const formEl = document.getElementById('weather-form');
const weatherInputEl = document.getElementById('weather-input');

const cityEl = document.getElementById('city');
const temperatureEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const errorEl = document.getElementById('error');

const APIKEY = '12ee1540bbfa1eb9c4262c81f1d4ea07'

async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
    if (!response.ok) {
        errorEl.textContent = 'City not found';
    }
    const data = await response.json();
    return data;
}

function getWeatherData(weatherData) {
    const {name, main, weather, wind} = weatherData;
    cityEl.textContent = name;
    temperatureEl.textContent = main && main.temp;
    windEl.textContent = wind.speed;
}

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = weatherInputEl.value;
    try {
        const weatherData = await fetchWeather(input)
        getWeatherData(weatherData)
    } catch (error) {
        console.log(error);
    }
})