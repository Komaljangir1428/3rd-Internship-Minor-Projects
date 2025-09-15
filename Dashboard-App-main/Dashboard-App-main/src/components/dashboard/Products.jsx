import React from 'react';

function Products() {
  const products = [
    { name: 'Product A', stock: 40 },
    { name: 'Product B', stock: 24 },
    { name: 'Product C', stock: 30 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>PRODUCTS</h3>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '10px' }}>
          <div style={{ width: '120px' }}>Product</div>
          <div>Stock</div>
        </div>
        {products.map((p, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '6px' }}>
            <div style={{ width: '120px' }}>{p.name}</div>
            <div>{p.stock}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
