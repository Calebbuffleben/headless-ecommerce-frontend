import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-commerce</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/products" className="hover:text-gray-400">Products</a></li>
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-1 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} E-commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;