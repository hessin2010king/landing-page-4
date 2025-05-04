import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2A323B] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <img src="/images/logo.png" alt="Logo" className="h-16 w-25 mb-4" />
            <p className="text-[#FFFFFF99] text-sm max-w-[280px] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue erai, vestibulum eget sem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#FFFFFF1A] flex items-center justify-center hover:bg-[#FFFFFF33]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FFFFFF1A] flex items-center justify-center hover:bg-[#FFFFFF33]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FFFFFF1A] flex items-center justify-center hover:bg-[#FFFFFF33]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FFFFFF1A] flex items-center justify-center hover:bg-[#FFFFFF33]">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-[#FFFFFF99] hover:text-white">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#FFFFFF99] hover:text-white">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#FFFFFF99] hover:text-white">
                  blog
                </button>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-[#FFFFFF99]">
                <span>604703875</span>
              </li>
              <li className="flex items-center text-[#FFFFFF99]">
                <span>blutower@info.ca</span>
              </li>
              <li className="flex items-center text-[#FFFFFF99]">
                <span>British Columbia, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[#FFFFFF1A] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#FFFFFF99] text-sm">Copyright © 2024 - Designed by Mahdie Heshmati</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <button className="text-[#FFFFFF99] text-sm hover:text-white">Term of use</button>
            <button className="text-[#FFFFFF99] text-sm hover:text-white">Privacy policy</button>
            <button className="text-[#FFFFFF99] text-sm hover:text-white">Cookie policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
