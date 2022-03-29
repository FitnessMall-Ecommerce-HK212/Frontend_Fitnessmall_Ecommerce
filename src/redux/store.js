import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/orders/orderSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

export default store
