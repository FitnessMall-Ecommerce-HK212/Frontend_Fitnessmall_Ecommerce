import axios from 'axios';
const API_SERVER_URL = 'http://localhost:8080';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const AuthAPI = {
  loadUser: () => axios.get(`${API_SERVER_URL}/api/user_session`),

  registerUser: (data) => axios.post(`${API_SERVER_URL}/api/users`, data, config),

  loginUser: (data) => axios.get(`${API_SERVER_URL}/api/user_signin`, { params: data }, config),
  
};
