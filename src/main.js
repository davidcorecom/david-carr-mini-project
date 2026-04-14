import { getForecast } from "..src/api.js"

(async () => {
const weather = document.getElementById("weather")
const data = await getForecast(51.5029, 0.0222)
weather.textContent = `${data.current_weather}`
})()
