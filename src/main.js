import { getForecast } from "/api.js"

const weather = document.createElement("weather")

async function loadWeather() {
    const data = await getForecast()
    weather.textContent = data.current_weather
}

loadWeather()
