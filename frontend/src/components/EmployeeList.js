import React from 'react';

function EmployeeList({ employees }) {
  return (
    <ul>
      {employees.map((emp, index) => (
        <li key={index}>{emp}</li>
      ))}
    </ul>
  );
}

export default EmployeeList;
