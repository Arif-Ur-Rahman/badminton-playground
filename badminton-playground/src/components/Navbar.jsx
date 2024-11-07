// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          Aftabnagar Badminton Club
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link to="/register" className="hover:text-yellow-400 transition duration-300">
            Register
          </Link>
          <Link to="/login" className="hover:text-yellow-400 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
