import axios from 'axios';
import { BASE_URL } from '../config/host';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const AuthAPI = {
  registerUser: (data) => axios.post(`${BASE_URL}api/user_signup`, data, config),

  loginUser: (data) => axios.get(`${BASE_URL}api/user_signin`, { params: data }, config),
  
};
