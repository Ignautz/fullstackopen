import Person from './Person'

const Persons = (props) => {

    const filterPersons = (persons, search) => {
        return (persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())))
      }

    return (
        <ul>
            {filterPersons(props.persons, props.newFilterText).map(entry =>
            <Person key={entry.id} entry={entry} />
            )}
      </ul>
    )
}

export default Persons