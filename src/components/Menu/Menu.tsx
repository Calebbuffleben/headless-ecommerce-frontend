const Menu = () => (
    <>
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
    </>
);

export default Menu;