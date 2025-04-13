import React, { useEffect, useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    fetch("http://localhost:8080/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = (name) => {
    fetch("http://localhost:8080/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    }).then(fetchEmployees);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee List</h2>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
