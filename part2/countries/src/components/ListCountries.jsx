import OneCountry from "./OneCountry"
import { useState } from "react"

const ListCountries = ({ countryList }) => {
    const [selectedCountry, setSelectedCountry] = useState([])
    const countryNames = countryList.map(country => country.name.common)

    const countryPicker = (country) => {
        const newCountry = countryList.filter(c => c.name.common === country)
        setSelectedCountry(newCountry)    
    }

    return(
        <div>
            <ul>
                {countryNames.map((country) => (
                    <li key={country}>
                        {country}
                        <button value={country} onClick={()=>countryPicker(country)}>show</button>
                    </li>
                ))}
            </ul>

        <OneCountry country={selectedCountry} />

        </div>
    )
}

export default ListCountries