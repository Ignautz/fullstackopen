import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import EntryForm from './components/EntryForm'
import personService from './services/persons'
import Notification from './components/Notifcation'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterText, setNewFilterText] = useState('')
  const [message, setMessage] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: newName,
      number: newNumber,
    }

    if(persons.find((name) => name.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        modifyEntry(newName)
      }
    } else {
      personService
        .create(entryObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
          setMessage([`${entryObject.name} added to phonebook`, 'success'])
          setTimeout(() => {
            setMessage([])
          }, 3000)
        })
    }
  }

  const modifyEntry = (newName) => {
    const updateId = (persons.find((name) => name.name === newName)).id
    const newEntry = {
      name: newName,
      number: newNumber,
      id: updateId
    }
    personService
      .update(updateId, newEntry)
      .then(newEntry => {
        setPersons(persons.map(person => person.id !== updateId ? person : newEntry))
        setNewName('')
        setNewNumber('')
      })
  }

  const deleteEntry = (id) => {
    const personToDelete = persons.filter(p => p.id === id)
    if (window.confirm(`delete ${personToDelete[0].name}?`)) {
      personService
        .deleteEntry(id)
        .then( () => {
          const newPersons = persons.filter(p => p.id !== id)
          setPersons(newPersons)
        })
        .catch(error => {
          setMessage([`${personToDelete[0].name} has already been removed from the server`, 'error'])
          setTimeout(() => {
            setMessage([])
          }, 3000)
          setPersons(persons.filter(p => p.id !== id))
        })
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
      <h1>Phonebook</h1>
      <Notification message={message[0]} type={message[1]}  />
      <Filter value={newFilterText} onChange={handleSearchChange} />
      <h2>add a new</h2>
      <EntryForm addEntry={addEntry} newName={newName} handleEntryChange={handleEntryChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilterText={newFilterText} deleteEntry={deleteEntry} />
    </div>
  )
}

export default App
