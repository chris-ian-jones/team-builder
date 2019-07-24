import React, { useState } from 'react';
import './App.css';
// import TeamMembersList from './TeamMembersList';

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Name
          <input 
            onChange={ (event) => {
              console.log(event.target.value)
            } }
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
