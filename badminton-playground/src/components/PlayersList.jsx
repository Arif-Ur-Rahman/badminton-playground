// src/components/PlayersList.js
import React from 'react';
import PlayerCard from './PlayerCard';

const PlayersList = ({ players }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Players Who Have Joined for Tonight:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
