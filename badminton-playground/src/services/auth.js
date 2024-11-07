// src/services/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust URL based on backend

export const register = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};
