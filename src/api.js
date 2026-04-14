async function getForecast(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        const data = await response.json();
        return (`The weather in location is:`, data.current_weather);

    } catch (error) {
        console.error("Failed to fetch forecast:", error);
    }
}

(async () => {
const weather = document.getElementById("weather")
const data = await getForecast(51.5029, 0.0222)
weather.textContent = `${data.current_weather}`
})()
