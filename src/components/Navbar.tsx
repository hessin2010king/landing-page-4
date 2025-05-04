import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="absolute w-full top-10 z-10 flex justify-center">
      <div className="w-[1366px] h-[136px] mx-[37px] rounded-[108px] bg-[#D9D9D933] backdrop-blur-[38px] px-20 py-[26px] flex items-center gap-[50px]">
        <div className="flex items-center">
          <button onClick={() => scrollToSection('hero')} className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-74 w-122" />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <button onClick={() => scrollToSection('hero')} className="text-white text-xl font-Gilroy-Medium hover:text-black">• Home</button>
          <button onClick={() => scrollToSection('about')} className="text-white text-xl font-Gilroy-Medium hover:text-black">About Us</button>
          <button onClick={() => scrollToSection('blog')} className="text-white text-xl font-Gilroy-Medium hover:text-black">Blog</button>
          <button onClick={() => scrollToSection('contact')} className="text-white text-xl font-medium hover:text-black">Contact Us</button>
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
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full mt-2 left-0 right-0 py-2 bg-white/90 rounded-md shadow-lg md:hidden">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 text-xl text-blue-800 hover:bg-blue-100">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-xl text-blue-800 hover:bg-blue-100">About Us</button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left px-4 py-2 text-xl text-blue-800 hover:bg-blue-100">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-xl text-blue-800 hover:bg-blue-100">Contact Us</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
