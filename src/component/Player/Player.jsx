import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Player = ({ player }) => {
    const { name, country, image,  battingStyle, biddingPrice } = player;
    
    return (
        <div className="mb-20 card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
            <figure className="relative overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
            </figure>
            
            <div className="card-body p-5">
                <div className="flex items-center justify-between mb-4">
                   <div>
                     <div className="flex items-center gap-3">
                        <FaUser className="text-gray-500 w-5 h-5" />
                        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    </div>
                    
                    </div>
                  
                </div>
                <div className='flex justify-between'>
                      <div className="flex items-center gap-2 ">
                        <FaFlag className="text-red-600" />
                        <span className="text-sm font-medium text-gray-700">
                            {country} 
                        </span>
                   </div>
                    <div className="bg-[#F3F3F3] py-2 px-4 rounded-xl">All-Rounder</div>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Rating:</span>
                 
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Batting Style:</span>
                        <span className="font-semibold text-gray-800">{battingStyle}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Batting Style:</span>
                        <span className="font-semibold text-gray-800">{battingStyle}</span>
                    </div>
                </div>

                <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600 font-medium">Price:</span>
                        <span className="text-2xl font-bold ">${biddingPrice}</span>
                    </div>
                    
                    <button className="btn bg-[#F3F3F3] w-full py-3 text-lg font-bold rounded-lg hover:bg-opacity-90">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;