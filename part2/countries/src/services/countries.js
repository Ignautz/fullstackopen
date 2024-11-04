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
    try {
        const request = axios.get(`${weatherUrl}lat=${country[0].latlng[0]}&lon=${country[0].latlng[1]}&appid=${api_key}`)
        return request.then(response => response.data)
    } catch (error) {
        console.log('no country selected')
    }
}

export default { getAll, getOne, getWeather }