import React, { useState } from 'react';
import './App.css';
import TeamMemberList from './TeamMemberList'

function App() {
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: ''
  })

  const [personArray, setPersonArray] = useState([])

  const submitHandler = (event) => {
    event.preventDefault()
    setPersonArray(personArray.concat(formState))

  }

  console.log('personArray', personArray)
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input 
            onChange={event => {
              setFormState({ ...formState, name: event.target.value})
            }}
          />
        </label>
        <label>
          Email
          <input
             onChange={event => {
              setFormState({ ...formState, email: event.target.value})
            }}
          />
        </label>
        <label>
          Role
          <input 
            onChange={event => {
              setFormState({ ...formState, role: event.target.value})
            }}
          />
        </label>
          <button>Submit</button>
      </form>
      {personArray.map(person => (
        <TeamMemberList key={person.email} person={person}/>
      ))}
      
    </div>
  );
}

export default App;
