import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthAPI } from '../../services/auth';
import { utils } from '../../helpers';
import {useHistory} from 'react-router-dom';
import axios from "axios";
const { setAuthToken } = utils;

const initialState = {
  // token: localStorage.getItem('token'),
  sessionID:'',
  isAuthenticated: null,
};

export const loadUser = createAsyncThunk('user_session', async () => {

  const res = await AuthAPI.loadUser();
  console.log('user: ', res.data);
  return res.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async ({ firstName, lastName, email, password }) => {
  const res = await AuthAPI.registerUser({ firstName, lastName, email, password });

  console.log(res.data);
  return res.data;
});

export const loginUser = createAsyncThunk('user_signin', async ({ username, password }) => {
  const res = await AuthAPI.loginUser({ username, password });
  switch (res.data){
    case "Missing username value":
      alert("Missing username value")
      break;
    case "Missing password value":
      alert("Missing password value")
      break
    case "Wrong information":
      alert("Wrong information")
      break
    case "Account hasn't been verified yet":
      alert("Account hasn't been verified yet")
      break
    default:
      localStorage.setItem("sessionID", res.data)
      break
  }
  // console.log(res.data);
  return res.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      // localStorage.removeItem('token');
      console.log('logged out...');

      return {
        // token: null,
        isAuthenticated: false,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
      }))
      .addCase(registerUser.fulfilled, (state, action) => {
        // localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          // token: action.payload.token,
          isAuthenticated: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          // token: action.payload.token,
          isAuthenticated: true,
          sessionID:action.payload,
        };
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
