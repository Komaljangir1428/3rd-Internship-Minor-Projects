import React from 'react';

function Customers() {
  const customers = [
    { id: 1, name: 'Alice', location: 'Delhi' },
    { id: 2, name: 'Bob', location: 'Mumbai' },
    { id: 3, name: 'Charlie', location: 'Bangalore' },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>CUSTOMERS</h3>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '10px' }}>
          <div style={{ width: '60px' }}>ID</div>
          <div style={{ width: '140px' }}>Name</div>
          <div style={{ width: '140px' }}>Location</div>
        </div>
        {customers.map((c, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '6px' }}>
            <div style={{ width: '60px' }}>{c.id}</div>
            <div style={{ width: '140px' }}>{c.name}</div>
            <div style={{ width: '140px' }}>{c.location}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Customers;
