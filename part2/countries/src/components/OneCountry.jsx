import { useState, useEffect } from "react"
import Weather from "./Weather"
import countryService from '.././services/countries'

const OneCountry = ({ country }) => {
   if (country.length != 0) {
      const languages = country[0].languages
      const [oneCountry, setOneCountry] = useState([])

      useEffect(() => {
         countryService
            .getWeather(country)
            .then(weatherCountry => {
               setOneCountry(weatherCountry)
            })
      }, [])

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
               <h3>Weather in {country[0].capital[0]}</h3>
               <Weather country={oneCountry} />
         </div>
      )
   }
}

export default OneCountry