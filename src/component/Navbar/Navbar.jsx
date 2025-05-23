import React from 'react';
import { FaCoins } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = ({ coins }) => {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white ">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-auto" />
      </div>

      {/* Navigation Links and Coins */}
      <div className="flex items-center gap-8">
        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-800 font-semibold text-lg">
          {['Home', 'Future', 'Teams', 'Schedules'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#fdc130] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Coin Button */}
        <button className="flex items-center gap-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md shadow-sm text-gray-800 font-semibold transition-all duration-200">
          
          <span>{coins}</span>
          <span>Coins</span>
          <FaCoins className="text-[#fdc130] text-lg" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
