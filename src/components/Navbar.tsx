
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="absolute w-full top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/80f03dfa-6c74-4b68-8176-26425cc84f71.png" alt="Logo" className="h-10 w-10" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white font-medium hover:text-blue-100">• Home</Link>
            <Link to="/about" className="text-white font-medium hover:text-blue-100">About Us</Link>
            <Link to="/blog" className="text-white font-medium hover:text-blue-100">Blog</Link>
            <Link to="/contact" className="text-white font-medium hover:text-blue-100">Contact Us</Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mt-2 py-2 bg-white/90 rounded-md shadow-lg md:hidden">
            <Link to="/" className="block px-4 py-2 text-blue-800 hover:bg-blue-100">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-blue-800 hover:bg-blue-100">About Us</Link>
            <Link to="/blog" className="block px-4 py-2 text-blue-800 hover:bg-blue-100">Blog</Link>
            <Link to="/contact" className="block px-4 py-2 text-blue-800 hover:bg-blue-100">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
