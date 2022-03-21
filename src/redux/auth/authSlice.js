import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthAPI } from '../../services/auth';
import { utils } from '../../helpers';

const { setAuthToken } = utils;

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const res = await AuthAPI.loadUser();
  console.log('user: ', res.data);
  return res.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async ({ firstName, lastName, email, password }) => {
  const res = await AuthAPI.registerUser({ firstName, lastName, email, password });

  console.log(res.data);
  return res.data;
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  const res = await AuthAPI.loginUser({ email, password });

  console.log(res.data);
  return res.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      console.log('logged out...');
      // state.user = null;
      // state.token = null;
      // state.isAuthenticated = false;
      // state.loading = false;

      return {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => ({
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      }))
      .addCase(registerUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          loading: false,
        };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          loading: false,
        };
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
