const EntryForm = (props) => {
    return (
        <form onSubmit={props.addEntry}>
        <div>
          name: <input 
            value={props.newName}
            onChange={props.handleEntryChange}
          />
        </div>
        <div>
          number: <input
            value={props.newNumber}
            onChange={props.handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default EntryForm