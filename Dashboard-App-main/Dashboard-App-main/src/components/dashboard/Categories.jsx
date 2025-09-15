import React from 'react';

function Categories() {
  const categories = [
    { name: 'Electronics', img: 'https://cdn-icons-png.flaticon.com/512/1041/1041880.png' },
    { name: 'Apparel', img: 'https://cdn-icons-png.flaticon.com/512/892/892458.png' },
    { name: 'Home Decor', img: 'https://cdn-icons-png.flaticon.com/512/2913/2913469.png' },
    { name: 'Books', img: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png' }
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>CATEGORIES</h3>
      </div>
      <div className="category-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {categories.map(cat => (
          <div key={cat.name} className="category-card" style={{ textAlign: 'center', width: '150px' }}>
            <h4>{cat.name}</h4>
            <img src={cat.img} alt={cat.name} className="category-img" style={{ width: '60px', height: '60px', objectFit: 'contain', marginTop: '5px' }} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Categories;
