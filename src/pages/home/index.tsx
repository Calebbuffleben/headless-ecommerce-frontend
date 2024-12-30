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

const carouselImages = [
    'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_1280.jpg',
  ];

export default function Home() {
  return (
    <div className="font-sans">
        {/* Menu Section */}
        <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">E-commerce</h2>
            <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Products</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            </ul>
        </nav>

        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-16 text-center">
            <h1 className="text-4xl font-bold">Welcome to Our E-commerce Store</h1>
            <p className="mt-4 text-lg">Find the best products at unbeatable prices!</p>
        </section>

        {/* Carousel Section */}
        <section className="my-8">
            <div className="flex overflow-x-auto space-x-4 px-6">
            {carouselImages.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full max-w-xl rounded-lg shadow-lg"
                />
            ))}
            </div>
        </section>

        {/* Product Section */}
        <section className="py-8 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockedProducts.map((product) => (
                <div
                    key={product.id}
                    className="border border-gray-300 rounded-lg p-4 text-center shadow hover:shadow-lg transition-shadow duration-300"
                >
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-bold text-blue-500 mb-4">${product.price.toFixed(2)}</p>
                    <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                    Buy Now
                    </button>
                </div>
                ))}
            </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Our E-commerce Store. All rights reserved.</p>
        </footer>
    </div>
  );
}
