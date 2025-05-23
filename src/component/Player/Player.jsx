import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Player = ({ player, onSelect, isDisabled }) => {
  const { name, country, image, battingStyle, biddingPrice } = player;

  return (
    <div className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-all border border-gray-200 rounded-lg">
      <figure>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </figure>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <FaUser className="text-gray-500" />
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <FaFlag className="text-red-500" />
          <p className="text-sm text-gray-600">{country}</p>
        </div>
        <p className="text-sm text-gray-600 mb-2">{battingStyle}</p>
        <p className="font-semibold mb-4">Price: ${biddingPrice}</p>
        <button
          onClick={() => onSelect(player)}
          className={`btn w-full ${
            isDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#F3F3F3] hover:bg-gray-200'
          }`}
          disabled={isDisabled}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
