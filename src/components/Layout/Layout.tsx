import React, { ReactNode } from 'react';
import Menu from '../Menu/Menu';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Menu />

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