
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img src="/lovable-uploads/80f03dfa-6c74-4b68-8176-26425cc84f71.png" alt="Logo" className="h-12 w-12" />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue
              sem, vestibulum eget sem. Proin augue
              sem, vestibulum eget sem.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📞</span>
                  6047033675
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">✉️</span>
                  bluknow@info.ca
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">📍</span>
                  British Columbia, Canada
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">Copyright © 2024 - Designed by Natalia Kreative</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of use</Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy policy</Link>
            <Link to="/cookie" className="text-sm text-gray-400 hover:text-white">Cookie policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
