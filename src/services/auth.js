import axios from 'axios';
const API_SERVER_URL = 'https://fitnessmall.herokuapp.com';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const AuthAPI = {
  registerUser: (data) => axios.post(`${API_SERVER_URL}/api/user_signup`, data, config),

  loginUser: (data) => axios.get(`${API_SERVER_URL}/api/user_signin`, { params: data }, config),
  
};
