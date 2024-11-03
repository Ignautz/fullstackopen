const Person = ({entry, deleteEntry}) => {

    return (
      <li>
        {entry.name} {entry.number}
        <button onClick={deleteEntry}>delete</button>
      </li>
    )
  }

export default Person