import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import EntryForm from './components/EntryForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterText, setNewFilterText] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    if(persons.find((name) => name.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(entryObject))
      setNewName('')
      setNewNumber('')
    }
  }
  
  const handleEntryChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewFilterText(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilterText} onChange={handleSearchChange} />
      <h3>add a new</h3>
      <EntryForm addEntry={addEntry} newName={newName} handleEntryChange={handleEntryChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilterText={newFilterText} />
    </div>
  )
}

export default App
