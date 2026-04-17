async function getForecast(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        const data = await response.json();
        return data.current_weather

    } catch (error) {
        console.error("Failed to fetch forecast:", error)
    }
}

(async () => { 
const weatherElement = document.getElementById("weather")
const weather = await getForecast(51.059, 0.0222)

weatherElement.textContent = `Temp: ${weather.temperature} Celcius` 
})()
