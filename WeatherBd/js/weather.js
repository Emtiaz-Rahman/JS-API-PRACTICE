const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const cityName = document.getElementById('city_name')
    const cityInput = cityName.value
    cityName.value = '';
    if (cityInput == '') {
        alert('please write city name')
        return false;
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`

        fetch(url)
            .then(Response => Response.json())
            .then(data => displayWeatherStatus(data))
    }


}
const displayWeatherStatus = weather => {
    console.log(weather.name);
    const city = document.getElementById('city')
    city.innerText = weather.name
    const weatherTemperatures = document.getElementById('temperature')
    weatherTemperatures.innerText = weather.main.temp
    const weatherCondition = document.getElementById('condition')
    weatherCondition.innerText = weather.weather[0].main
}