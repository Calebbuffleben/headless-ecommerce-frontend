import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';   

import 'tailwindcss/tailwind.css';

const mockedCartItems = [
  {
    id: 1,
    title: 'Product 1',
    price: 29.99,
    quantity: 1,
    image: 'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 39.99,
    quantity: 2,
    image: 'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(mockedCartItems);

  const handleQuantityChange = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header 
        ContentDescription="View and manage items in your shopping cart." 
        ContentRobots="index, follow"
        ContentOgTitle="Your Cart - E-commerce"
        ContentOgDescription="View and manage items in your shopping cart."
        ContentType="website"
      />
      <Layout>
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">My Cart</h1>

          {cart.length === 0 ? (
            <p className="text-center text-gray-600">
              Your cart is empty. <Link href="/">Go shopping!</Link>
            </p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded"
                  />
                  <div className="flex-1 px-4">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-16 border rounded text-center"
                    />
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center py-4 border-t">
                <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
                <Link href="/checkout">
                  <div className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">
                    Proceed to Checkout
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default CartPage;
