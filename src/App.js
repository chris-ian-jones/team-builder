import React, { useState } from 'react';
import './App.css';
// import TeamMembersList from './TeamMembersList';

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Name
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Role
          <input />
        </label>
          <input type="button" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
