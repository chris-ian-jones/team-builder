import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputData, setInputData] = useState("")
  console.log(inputData)

  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input 
            onChange={event => {
              setInputData(event.target.value)
            }}
          />
        </label>

        {/* <label>
          Email
          <input onChange={ () => {} }/>
        </label>
        <label>
          Role
          <input onChange={ () => {} }/>
        </label> */}
          <input type="button" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
