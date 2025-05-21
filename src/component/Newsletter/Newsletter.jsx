import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-[#0F172A] '>
         <div className="bg-gradient-to-r from-[#d8f3ff] via-white to-[#ffe2bd] p-16 rounded-2xl shadow-md max-w-3xl mx-auto mt-20 relative bottom-16">
            <h2 className="text-2xl font-bold text-center mb-2">Subscribe to our Newsletter</h2>
            <p className="text-center text-gray-600 mb-4">Get the latest updates and news right in your inbox!</p>
            <div className="flex justify-center gap-4">
                <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg border border-gray-300 w-64 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90">
                Subscribe
                </button>
            </div>
         </div>
        </div>
    );
};

export default Newsletter;