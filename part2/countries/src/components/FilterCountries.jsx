import FoundCountries from "./FoundCountries"

const FilterCountries = (props) => {
    return (
            <div>
                find countries: <input 
                    value={props.value}
                    onChange={props.onChange}
                />
            <FoundCountries countryList={props.countryList} />
            </div>
            
    )
}

export default FilterCountries