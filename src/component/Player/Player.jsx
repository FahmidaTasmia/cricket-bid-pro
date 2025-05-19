import React from 'react';
import { FaFlag } from 'react-icons/fa'; // Icon for country flag

const Player = ({ player }) => {
    const { name, country, image, role, battingStyle, bowlingStyle, biddingPrice } = player;
    
    return (
        <div className="card w-72 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 group">
            <figure className="relative overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
            </figure>
            
            <div className="card-body p-4">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="card-title text-xl font-semibold text-gray-800">{name}</h2>
                    <div className="flex items-center space-x-2">
                        <FaFlag className="text-gray-600" />
                        <p className="text-sm text-gray-500">{country}</p>
                    </div>
                </div>

                <div className="flex justify-between items-center text-gray-600 mb-2">
                    <p className="text-sm font-medium">Role:</p>
                    <p className="text-sm font-semibold text-gray-800">{role}</p>
                </div>

                <div className="flex justify-between items-center text-gray-600 mb-2">
                    <p className="text-sm font-medium">Batting Style:</p>
                    <p className="text-sm font-semibold text-gray-800">{battingStyle}</p>
                </div>

                <div className="flex justify-between items-center text-gray-600 mb-2">
                    <p className="text-sm font-medium">Bowling Style:</p>
                    <p className="text-sm font-semibold text-gray-800">{bowlingStyle}</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-medium">Price:</p>
                    <p className="text-xl font-semibold text-primary">
                        ${biddingPrice.toLocaleString()}
                    </p>
                </div>

                <button className="btn btn-primary w-full py-3 text-lg font-semibold rounded-lg transition-all hover:bg-opacity-90 active:scale-95">
                    Choose Player
                </button>
            </div>
        </div>
    );
};

export default Player;
