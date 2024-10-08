document.getElementById('fetchWeather').addEventListener('click', fetchWeatherData);

async function fetchWeatherData() {
    const city = document.getElementById('city').value;
    const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const weatherResult = document.getElementById('weatherResult');
    const error = document.getElementById('error');

    // Clear previous results
    weatherResult.innerHTML = '';
    error.innerHTML = '';

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        
        weatherResult.innerHTML = `<h2>${data.name}</h2>
                                   <p>Temperature: ${temperature} °C</p>
                                   <p>Weather: ${description}</p>`;
    } catch (err) {
        error.innerHTML = 'Could not fetch weather data. Please try again.';
    }
}
