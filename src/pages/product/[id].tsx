import React from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

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

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = mockedProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-4">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-blue-500">${product.price.toFixed(2)}</p>
          </div>
        </div>
        <button
          onClick={() => router.push('/')}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
