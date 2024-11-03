import { useState, useEffect } from 'react'
import FilterCountries from './components/FilterCountries'
import countryService from './services/countries'

function App() {
  const [searchText, setSearchText] = useState('')
  const [countries, setCountries] = useState([])
  const [fullCountries, setFullCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(intialCountries => {
        setFullCountries(intialCountries)
      })
  }, [])

  useEffect(() => {
    const foundCountries = fullCountries.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()))
    setCountries(foundCountries)
  }, [searchText])

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <h1>Country Data</h1>
      <FilterCountries value={searchText} onChange={handleChange} countryList={countries} />
    </>
  )
}

export default App
