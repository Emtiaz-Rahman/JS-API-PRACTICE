const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const cityName = document.getElementById('city_name')
    const cityInput = cityName.value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(Response => Response.json())
        .then(data => displayTemperature(data))
}
const displayTemperature = temperatures => {
    console.log(temperatures.name);
    const city = document.getElementById('city')
    city.innerText = temperatures.name
}