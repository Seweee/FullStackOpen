const Person = ({ person }) => {
    return (
        <li>{person.name} {person.number}</li>
    )
}

const Persons = (props) => {
    const personsToShow = (props.showPerson === '')
    ? props.persons
    : props.persons.filter(person => person.name.includes(props.showPerson))
    return(
        <ul>
        {personsToShow.map(person =>
            <Person key={person.id} person={person} />
        )}
        </ul>
    )
}

export default Persons