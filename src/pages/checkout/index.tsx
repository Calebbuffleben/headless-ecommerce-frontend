import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import 'tailwindcss/tailwind.css';
import Header from '@/components/Header/Header';
import { mockedCartItems } from '@/mocks/Items';

const CheckoutPage = () => {
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

  const handleCheckout = () => {
    alert('Checkout complete!');
  };

  return (
    <>
      <Header 
        ContentDescription="Finishing the purchase." 
        ContentRobots="index, follow"
        ContentOgTitle="Checkout - E-commerce"
        ContentOgDescription="Finishing the purchase."
        ContentType="website"
        PageTitle="Checkout"
      />
      <Layout>
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
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
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center py-4 border-t">
                <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
                <button
                  onClick={handleCheckout}
                  className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default CheckoutPage;
