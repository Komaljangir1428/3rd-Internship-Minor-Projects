import React from 'react';

function Inventory() {
  const inventory = [
    { item: 'Laptops', qty: 25, img: 'https://cdn-icons-png.flaticon.com/512/2721/2721613.png' },
    { item: 'Shirts', qty: 120, img: 'https://cdn-icons-png.flaticon.com/512/892/892458.png' },
    { item: 'Chairs', qty: 75, img: 'https://cdn-icons-png.flaticon.com/512/1995/1995715.png' },
  ];

  return (
    <main className="main-container">
      <div className="main-title" style={{ marginBottom: '20px' }}>
        <h3>INVENTORY</h3>
      </div>
      <div
        className="inventory-grid"
        style={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          paddingLeft: '10px',
        }}
      >
        {inventory.map(i => (
          <div
            key={i.item}
            className="inventory-card"
            style={{
              textAlign: 'center',
              width: '140px',
              padding: '10px',
              backgroundColor: '#2c3e50',
              borderRadius: '8px',
              color: 'white',
            }}
          >
            <h4>{i.item}</h4>
            <img
              src={i.img}
              alt={i.item}
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                margin: '10px 0',
              }}
            />
            <p>Quantity: {i.qty}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Inventory;
