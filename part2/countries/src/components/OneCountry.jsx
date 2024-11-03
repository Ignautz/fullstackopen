import { useState } from "react"
import Weather from "./Weather"

const OneCountry = ({ country }) => {
    if (country.length == 0) {
        return (<></>)
    }
    const [oneCountry, setOneCountry] = useState([])
    const languages = country[0].languages

    // if (oneCountry.length == 0) {
    //     countryService
    //         .getWeather(country[0])
    //         .then(weatherCountry => {
    //             setOneCountry(weatherCountry)
    //         })
    // }


    if (oneCountry.length == 0) {
        setOneCountry([{
        "coord": {
           "lon": 7.367,
           "lat": 45.133
        },
        "weather": [
           {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
           }
        ],
        "base": "stations",
        "main": {
           "temp": 284.2,
           "feels_like": 282.93,
           "temp_min": 283.06,
           "temp_max": 286.82,
           "pressure": 1021,
           "humidity": 60,
           "sea_level": 1021,
           "grnd_level": 910
        },
        "visibility": 10000,
        "wind": {
           "speed": 4.09,
           "deg": 121,
           "gust": 3.47
        },
        "rain": {
           "1h": 2.73
        },
        "clouds": {
           "all": 83
        },
        "dt": 1726660758,
        "sys": {
           "type": 1,
           "id": 6736,
           "country": "IT",
           "sunrise": 1726636384,
           "sunset": 1726680975
        },
        "timezone": 7200,
        "id": 3165523,
        "name": "Province of Turin",
        "cod": 200
     }])
    }

    return(
        <div>
            <h2>{country[0].name.common}</h2>
            <p>Capital: {country[0].capital[0]}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.keys(languages).map((key) => (
                    <li key={key}>
                        {languages[key]}
                    </li>
                ))}
            </ul>
            <img src={country[0].flags.png} alt={`${country[0].name.common} flag`} width='120px' />
            <Weather country={oneCountry[0]} capital={country[0].capital[0]} />
        </div>
    )
}

export default OneCountry