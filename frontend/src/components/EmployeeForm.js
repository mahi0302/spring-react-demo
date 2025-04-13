import React, { useState } from 'react';

function EmployeeForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default EmployeeForm;
