import { useState , useEffect } from 'react'
import serverService from './services/server'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleShowPerson = (event) => {
    setShowPerson(event.target.value)
  }
  const showNotification = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage('')
    }, 3000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if(persons.some(person => person.name === newName)){
      if(window.confirm(`The person '${newName}' already exists. Update their number?`)){
        const person = persons.find(person => person.name === newName)
        const changedPerson = { ...person, number: newNumber }
        serverService
          .update(changedPerson.id,changedPerson)
          .then(() => {
            serverService.getAll()
              .then((updatedPersons) => {
                setPersons(updatedPersons)
            })
          })
          .catch(error => {
            showNotification(`Information of '${newName}' has already been removed`)
          })
      }
    }else{
      serverService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    }
    setNewName('')
    setNewNumber('')
    showNotification(`Added/updated '${newName}'`)
  }

  const hook = () => {
    serverService
      .getAll() 
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  useEffect(hook, [])

  const deletePerson = (person) => {
    if(window.confirm(`The person '${person.name}' will be deleted`)){
      serverService
        .deleteUser(person.id)
        .then(() => {
          serverService.getAll()
            .then((updatedPersons) => {
              setPersons(updatedPersons)
        })
      })
    }
    showNotification(`Deleted '${person.name}'`)
  };
  

  return (
    <div>
      <h1>Phonebook</h1>
        <Filter value={showPerson} handle={handleShowPerson}/>
      <h2>add a new person</h2>
      <Notification message={errorMessage} />
      <PersonForm 
          addFunc={addPerson}
          value1={newName}
          handle1={handlePersonChange}
          value2={newNumber}
          handle2={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} showPerson={showPerson} buttonFunc={deletePerson}/>
    </div>
  )
}

export default App