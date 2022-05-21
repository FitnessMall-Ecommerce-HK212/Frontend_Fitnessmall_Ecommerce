import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthAPI } from '../../services/auth';
import { utils } from '../../helpers';
import axios from "axios";
const { setAuthToken } = utils;
const initialState = {
   errorLogin:'',
   errorRegister:'',
};

export const registerUser = createAsyncThunk('user_signup', async ({ username, password, email }) => {
  const res = await AuthAPI.registerUser({ username, password,name:'',email });
  if (res.data=='Sign up successfully! Please verify email to sign in'){
    axios.post(`https://fitnessmall.herokuapp.com/api/send_email`,{email:email})
    .then((res) => {
      localStorage.setItem('isAuthenticated',true)
    })
    .catch((err) => {
    alert(err);
    });
  }
  return res.data;
});

export const loginUser = createAsyncThunk('user_signin', async ({ username, password }) => {
  const res = await AuthAPI.loginUser({ username, password });
  return res.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        switch (action.payload){
          case "Missing username value":
            return {
              ...state,errorRegister:action.payload
            };
          case "Missing password value":
            return {
              ...state,errorRegister:action.payload
            };
          case "Missing email value":
            return {
              ...state,errorRegister:action.payload
            };
          case "Sign up failed ! Account has existed already":
            return {
              ...state,errorRegister:action.payload
            };
          case "Sign up failed ! Email has existed already":
              return {
                ...state,errorRegister:action.payload
              };
          default:
            return {
              ...state,errorRegister:''
            };
          };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        switch (action.payload){
          case "Missing username value":
            return {
              ...state,errorLogin:action.payload
            };
          case "Missing password value":
            return {
              ...state,errorLogin:action.payload
            };
          case "Wrong information":
            return {
              ...state,errorLogin:action.payload
            };
          case "Account hasn't been verified yet":
            return {
              ...state,errorLogin:action.payload
            };
          default:
            localStorage.setItem("sessionID", action.payload)
            return {
              ...state,errorLogin:''
            };
          };
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
