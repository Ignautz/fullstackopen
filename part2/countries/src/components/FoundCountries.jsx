import OneCountry from './OneCountry'
import ListCountries from './ListCountries'

const FoundCountries = ({ countryList }) => {
    if (countryList.length > 10) {
        return (
            <p>Too many matches, update text to narrow search</p>
        )
    } else if (countryList.length === 1) {
        return (
            <OneCountry country={countryList} />
        )
    } else if (countryList.length === 0 ) {
        return (
            <p>No countries found, try another search</p>
        )
    } else {
        return (
            <ListCountries countryList={countryList} />
        )
    }
}


export default FoundCountries