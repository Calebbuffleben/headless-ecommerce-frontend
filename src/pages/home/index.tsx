import React from 'react';

const mockedProducts = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is an awesome product.',
    price: 29.99,
    image: 'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is another great product.',
    price: 39.99,
    image: 'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'You will love this product.',
    price: 49.99,
    image: 'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
  },
];

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to Our E-commerce Store</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {mockedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>${product.price.toFixed(2)}</p>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
