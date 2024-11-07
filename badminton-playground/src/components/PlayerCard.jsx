// src/components/PlayerCard.js
import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <img src={player.image} alt={player.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 text-center">{player.name}</h3>
      <p className="text-sm text-gray-600 text-center">Previous Games: {player.previousGames}</p>
    </div>
  );
};

export default PlayerCard;
