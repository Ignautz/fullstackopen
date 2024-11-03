import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const api_key = import.meta.env.VITE_WEATHER_KEY

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getOne = (countryName) => {
    const request = axios.get(`${baseUrl}/name/${countryName}`)
    return request.then(response => response.data)
}

const getWeather = (country) => {
    const request = axios.get(`${weatherUrl}lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`)
    return request.then(response => response.data)
}

export default { getAll, getOne, getWeather }