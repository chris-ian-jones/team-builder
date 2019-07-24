import React, { useState } from 'react';
import './App.css';

function App() {
  // const [inputData, setInputData] = useState("")
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: ''
  })

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(formState)
  }

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
    </div>
  );
}

export default App;
