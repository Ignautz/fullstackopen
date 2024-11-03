import Person from './Person'

const Persons = ({ persons, newFilterText, deleteEntry }) => {

    const filterPersons = (persons, search) => {
        return (persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())))
      }

    return (
        <ul>
            {filterPersons(persons, newFilterText).map(entry =>
            <Person key={entry.id} entry={entry} deleteEntry={ () => deleteEntry(entry.id)} />
            )}
      </ul>
    )
}

export default Persons