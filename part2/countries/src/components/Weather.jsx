const Weather = ({ country, capital }) => {
    if(country.length == 0) {
        return <></>
    }
    return(
        <>
            <h3>Weather in {capital}</h3>
            <p>temperature: {Math.round(country.main.temp - 273.15)} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${country.weather[0].icon}@2x.png`} alt="weather icon" />
            <p>wind: {country.wind.speed} m/s</p>
        </>
    )
}

export default Weather