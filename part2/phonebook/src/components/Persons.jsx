const Person = ({ person,buttonFunc }) => {
    return (
        <li>
            {person.name} {person.number}
            <button onClick={() => buttonFunc(person)}> delete </button>
        </li> 
        
    )
}

const Persons = (props) => {
    const personsToShow = (props.showPerson === '')
    ? props.persons
    : props.persons.filter(person => person.name.includes(props.showPerson))
    return(
        <ul>
        {personsToShow.map(person =>
            <Person key={person.id} person={person} buttonFunc={props.buttonFunc} />
        )}
        </ul>
    )
}

export default Persons