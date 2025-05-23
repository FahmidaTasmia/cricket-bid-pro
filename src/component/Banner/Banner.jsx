import React from 'react';
import banner from '../../assets/bg-shadow.png';
import bannerMain from '../../assets/banner-main.png';

const Banner = ({ handleCoins }) => {
  return (
    <div
      className="rounded-xl mt-8 bg-[#141414] bg-no-repeat bg-cover bg-center
                 p-6 sm:p-10 md:p-14 lg:p-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Banner image */}
      <div className="flex justify-center mb-6">
        <img
          src={bannerMain}
          alt="Banner"
          className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 max-w-full h-auto"
        />
      </div>

      {/* Text & Button */}
      <div className="text-white text-center max-w-4xl mx-auto px-2">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h4 className="my-3 text-sm sm:text-base md:text-lg">
          Beyond Boundaries Beyond Limits
        </h4>
        <button
          onClick={handleCoins}
          className="btn bg-[#bde3a0] text-black btn-sm mt-3 px-6 py-2 rounded-md hover:bg-[#a4cf85] transition"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
