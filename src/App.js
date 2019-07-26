import React, { useState } from 'react';
import './App.css';
import TeamMemberList from './TeamMemberList'
import Form from './Form';

function App() {

  const [memberToEdit, setMemberToEdit] = useState()

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
