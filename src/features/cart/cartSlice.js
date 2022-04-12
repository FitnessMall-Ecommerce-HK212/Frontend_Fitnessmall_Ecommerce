import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Máy chạy bộ Impulse PT300', price: 45000000, image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FPT300_may-chay-bo-impulse.jpg?alt=media&token=ae7a34bd-09ff-4c65-8de6-fd54dcdb7e4e", quantity: 1, isChosen: false },
  { id: '2', name: 'Tạ tay Brosman', price: 65000, image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FBM5_ta-tay-brosman.jpg?alt=media&token=153c9fc5-8f7f-43a1-bff5-e10a41e692c5", quantity: 1, isChosen: false },
]

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      }
    },
    decrement: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      }
    },
    checkItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.isChosen = !existingItem.isChosen
      }
    },
    removeItem: (state, action) => {
      let id = action.payload.id
      const existingItem = state.find(item => item.id === id)
      if (existingItem) {
        return state.filter(item => item.id !== id)
      }
    }
  }
})

export const { increment, decrement, checkItem, removeItem } = cartSlice.actions
export const selectCart = (state) => state.cart

export default cartSlice.reducer
