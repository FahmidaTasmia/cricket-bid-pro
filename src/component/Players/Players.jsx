import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import { FaTrash } from 'react-icons/fa';

const Players = ({
  onSelect,
  selectedCount,
  selectedPlayers,
  showSelectedOnly,
  toggleSelectedView,
  onRemove
}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const renderSelectedView = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">
        Selected Player ({selectedCount}/6)
      </h2>
      <div className="space-y-4">
        {selectedPlayers.map((player) => (
          <div
            key={player.playerId}
            className="flex items-center justify-between border p-3 rounded-md"
          >
            <div className="flex items-center gap-4">
              <div  />
              <img className="w-12 h-12 bg-gray-200 rounded-full object-cover" src={player.image} alt="" />
              <div>
                <h3 className="font-semibold">{player.name}</h3>
                <p className="text-sm text-gray-500">{player.battingStyle}</p>
              </div>
            </div>
            <button onClick={() => onRemove(player.playerId)}>
              <FaTrash className="text-red-500 hover:text-red-700" />
            </button>
          </div>
        ))}
      </div>

      {selectedCount < 6 && (
        <button
          className="mt-6 bg-lime-200 text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-300"
          onClick={toggleSelectedView}
        >
          Add More Player
        </button>
      )}
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Top section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-8 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Available Players</h2>
        <div className="flex text-sm font-semibold overflow-hidden w-fit">
          <button
            className="bg-[#e7fe29] text-black px-4 py-1 rounded-l-lg"
            onClick={() => toggleSelectedView(false)}
          >
            Available
          </button>
          <button
            className="bg-white px-4 py-1 rounded-r-lg border border-gray-200"
            onClick={toggleSelectedView}
          >
            Selected <span>({selectedCount})</span>
          </button>
        </div>
      </div>

      {/* Render view */}
      {showSelectedOnly ? (
        renderSelectedView()
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <Player
              key={player.playerId}
              player={player}
              onSelect={onSelect}
              isDisabled={
                selectedPlayers.some((p) => p.playerId === player.playerId) ||
                selectedCount >= 6
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Players;
