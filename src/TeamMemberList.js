import React from 'react';

function TeamMemberList({ person }) {
    const { name, email, role } = person;
    return (
      <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Role: {role}</p>
       
      </div>
    );
  }
  
  export default TeamMemberList;