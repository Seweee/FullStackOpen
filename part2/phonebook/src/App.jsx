import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleShowPerson = (event) => {
    setShowPerson(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
        return
    }
    const newPerson = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
    }
    
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  

  return (
    <div>
      <h1>Phonebook</h1>
        <Filter value={showPerson} handle={handleShowPerson}/>
      <h2>add a new person</h2>
        <PersonForm 
            addFunc={addPerson}
            value1={newName}
            handle1={handlePersonChange}
            value2={newNumber}
            handle2={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons persons={persons} showPerson={showPerson}/>
    </div>
  )
}

export default App