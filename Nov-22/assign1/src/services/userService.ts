// services/userService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
}

export const loginUser = (credentials: Pick<User, 'email' | 'password'>) => {
  return axios.get(`${API_URL}/users`, {
    params: credentials
  });
};

export const registerUser = (userData: Omit<User, 'id'>) => {
  return axios.post(`${API_URL}/users`, userData);
};

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};