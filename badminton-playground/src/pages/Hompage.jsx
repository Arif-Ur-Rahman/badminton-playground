// src/pages/HomePage.js
import React from 'react';
import Banner from '../components/Banner';
import PlayersList from '../components/PlayersList';
import Tonim from '../images/tonim.jpg'

const HomePage = () => {
  // Sample player data (this will eventually come from an API)
  const players = [
    {
      id: 1,
      name: 'Tonim Vai',
      image: { Tonim },
      previousGames: '10',
    },
    {
      id: 2,
      name: 'Rafee',
      image: '/path/to/player2.jpg',
      previousGames: '8',
    },
    {
        id: 3,
        name: 'Shotej',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 4,
        name: 'Khabbab',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 5,
        name: 'Alauddin',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 6,
        name: 'Shohag Vai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 7,
        name: 'Sumon Vai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 8,
        name: 'Razib Bhai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 9,
        name: 'Adnan Bhai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 10,
        name: 'Adnan Bhai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 11,
        name: 'Adnan Bhai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 12,
        name: 'Adnan Bhai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
      {
        id: 13,
        name: 'Adnan Bhai',
        image: '/path/to/player2.jpg',
        previousGames: '8',
      },
    // Add more player objects here
  ];

  return (
    <div>
      <Banner />
      <PlayersList players={players} />
    </div>
  );
};

export default HomePage;
