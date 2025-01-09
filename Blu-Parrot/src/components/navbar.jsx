 
import { useState } from 'react';
import { Link } from 'react-router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-semibold">Startup 3</a>
        
        {/* Desktop Menu */}
        <div className="  md:flex space-x-8">
       
          <Link to="/" className="text-white hover:text-gray-200"> Home</Link>
          <Link to="/features" className="text-white hover:text-gray-200"> features</Link>
          <Link to="/pricing" className="text-white hover:text-gray-200"> pricing</Link>
          <Link to="#blog" className="text-white hover:text-gray-200"> Blog</Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <Menu size={24} /> */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="  absolute top-20 left-0 right-0 bg-purple-900 bg-opacity-95">
          <div className="px-4 py-2 space-y-3">
          <Link to="/" className="text-white hover:text-gray-200"> Home</Link>
          <Link to="/features" className="text-white hover:text-gray-200"> features</Link>
          <Link to="/pricing" className="text-white hover:text-gray-200"> pricing</Link>
          <Link to="#blog" className="text-white hover:text-gray-200"> Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
}