import React, { useState } from 'react';
import TeamMemberList from './TeamMemberList'

// component returns form as well as list of people
function Form(props) {
  console.log('props', props)
  
    // form state
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      role: ''
    })

    // person list state
    const [personArray, setPersonArray] = useState([])  

    // form handler to add formState (object) to person list (array)
    const submitHandler = (event) => {
      event.preventDefault()
      setPersonArray(personArray.concat(formState))
    }
  
    // console.log('personArray', personArray)
    return (
      <div className="App">
        <form onSubmit={submitHandler}>
          <label>
            Name
            <input 
              name="name"
              value={formState.name}
              onChange={event => {
                // hook ensures rest of formStates object remains the same, only changes key value pair after ,
                setFormState({ ...formState, name: event.target.value})
              }}
            />
          </label>
          <label>
            Email
            <input
            name="email"
            value={formState.email}
            onChange={event => {
              // hook ensures rest of formStates object remains the same, only changes key value pair after ,
               setFormState({ ...formState, email: event.target.value})
              }}
            />
          </label>
          <label>
            Role
            <input 
              name="role"
              value={formState.role}
              onChange={event => {
                // hook ensures rest of formStates object remains the same, only changes key value pair after ,
                setFormState({ ...formState, role: event.target.value})
              }}
            />
          </label>
            <button>Submit</button>
        </form>
        {personArray.map(person => (
          <>
            <TeamMemberList key={person.email} person={person}/>
            <button> edit {person.name}</button>
          </>
        ))}
      </div>
    );
  }
  
  export default Form;
  