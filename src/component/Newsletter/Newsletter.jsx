import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#0F172A] px-4 ">
      <div className="bg-gradient-to-r from-[#d8f3ff] via-white to-[#ffe2bd] 
                      p-6 sm:p-10 lg:p-16 rounded-2xl shadow-md 
                      max-w-3xl mx-auto mt-20 relative bottom-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-gray-300 w-full sm:w-64 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
