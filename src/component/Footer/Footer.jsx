import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0F172A] text-white px-4 sm:px-6 pb-10 pt-10">
        {/* Logo */}
        <div className="flex justify-center">
          <img className="w-28 sm:w-32 md:w-36" src={logo} alt="Logo" />
        </div>

        {/* Footer Grid */}
        <div className="mt-12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
          {/* About Us */}
          <div className="text-start">
            <h2 className="font-bold text-lg mb-2">About Us</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are a passionate team <br />
              dedicated to providing the best <br />
              services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-start">
            <h2 className="font-bold text-lg mb-2">Quick Links</h2>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="text-start">
            <h2 className="font-bold text-lg mb-2">Subscribe</h2>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md sm:rounded-l-md bg-white text-black w-full"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          ©2024 Your Company. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
