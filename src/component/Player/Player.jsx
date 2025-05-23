import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Player = ({ player }) => {
  const { name, country, image, battingStyle, biddingPrice } = player;

  return (
    <div className="w-full bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg overflow-hidden flex flex-col">
      <figure className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
        />
      </figure>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-500 w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">{name}</h2>
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <FaFlag className="text-red-600" />
            <span className="text-sm font-medium text-gray-700">{country}</span>
          </div>
          <div className="bg-gray-100 text-sm py-1 px-3 rounded-xl">All-Rounder</div>
        </div>

        <div className="space-y-2 text-sm text-gray-700 mb-4">
          <div className="flex justify-between">
            <span className="font-medium">Batting Style:</span>
            <span className="font-semibold">{battingStyle}</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 font-medium">Price:</span>
            <span className="text-xl font-bold">${biddingPrice}</span>
          </div>
          <button className="w-full py-2 bg-gray-100 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
