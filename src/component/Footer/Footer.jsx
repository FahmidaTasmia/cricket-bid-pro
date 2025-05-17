import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
           <footer className="bg-[#0F172A] text-white px-6 py-10">
                    {/* logo */}
                    <div className='flex justify-center'>
                        <img className='w-30' src={logo} alt="" />
                    </div>
                <div className="mt-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div className='text-start'>
                <h2 className="font-bold text-lg mb-2">About Us</h2>
                <p className="text-sm text-gray-400 ">
                    We are a passionate team <br /> dedicated to providing the best <br /> services  to our customers.
                </p>
                </div>

                {/* Quick Links */}
                <div className='text-start'>
                <h2 className="font-bold text-lg mb-2">Quick Links</h2>
                <ul className="text-sm text-gray-400 space-y-1">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#" className="hover:text-white">Services</a></li>
                    <li><a href="#" className="hover:text-white">About</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
                </div>

                {/* Subscribe */}
                <div className='text-start'>
                <h2 className="font-bold text-lg mb-2">Subscribe</h2>
                <p className="text-sm text-gray-400 mb-3">
                    Subscribe to our newsletter for the latest updates.
                </p>
                <div className="flex ">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 rounded-l-md bg-white text-black w-full"
                    />
                    <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-4 py-2 rounded-r-md">
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