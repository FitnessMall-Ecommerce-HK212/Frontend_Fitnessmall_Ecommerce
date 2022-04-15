import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
// localStorage.clear()

if (!localStorage.getItem("giacat")) {
  localStorage.setItem("giacat", JSON.stringify([
    { id: '1', name: 'Máy chạy bộ Impulse PT300', price: 45000000, image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FPT300_may-chay-bo-impulse.jpg?alt=media&token=ae7a34bd-09ff-4c65-8de6-fd54dcdb7e4e", quantity: 1, isChosen: false },
    // { id: '2', name: 'Tạ tay Brosman', price: 65000, image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FBM5_ta-tay-brosman.jpg?alt=media&token=153c9fc5-8f7f-43a1-bff5-e10a41e692c5", quantity: 1, isChosen: false },
  ]))
}


const initialState = JSON.parse(localStorage.getItem("giacat"))

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
        localStorage.setItem("giacat", JSON.stringify(state))

      }
    },
    decrement: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
        localStorage.setItem("giacat", JSON.stringify(state))
      }
    },
    checkItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.isChosen = !existingItem.isChosen
        localStorage.setItem("giacat", JSON.stringify(state))
      }
    },
    removeItem: (state, action) => {
      let id = action.payload.id
      const existingItem = state.find(item => item.id === id)
      if (existingItem) {
        let newState = state.filter(item => item.id !== id)
        localStorage.setItem("giacat", JSON.stringify(newState))
        return newState
      }
    },
    addItem: {
      reducer(state, action) {
        state.push(action.payload)
        localStorage.setItem("giacat", JSON.stringify(state))
      },
      prepare(id, name, price, image) {
        return {
          payload: {
            id,
            name,
            price,
            image,
            quantity: 1,
            isChosen: false
          }
        }
      }
    }
  }
})

export const { increment, decrement, checkItem, removeItem, addItem } = cartSlice.actions
export const selectCart = (state) => state.cart

export default cartSlice.reducer
