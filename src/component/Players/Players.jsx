import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({ onSelect, selectedCount }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-8 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Available Players</h2>
        <div className="flex text-sm font-semibold overflow-hidden w-fit">
          <button className="bg-[#e7fe29] text-black px-4 py-1 rounded-l-lg">
            Available
          </button>
          <button className="bg-white px-4 py-1 rounded-r-lg border border-gray-200">
            Selected <span>({selectedCount})</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map(player => (
          <Player
            key={player.playerId}
            player={player}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;
