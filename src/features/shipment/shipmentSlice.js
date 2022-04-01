import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', name: 'Máy chạy bộ Impulse PT300', price: 45000000, image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FPT300_may-chay-bo-impulse.jpg?alt=media&token=ae7a34bd-09ff-4c65-8de6-fd54dcdb7e4e", quantity: 1, isChosen: false},
]

const shipmentSlice = createSlice({
    name: 'shipment', 
    initialState,
    reducers: {
    }
})

// export const { increment, decrement, checkItem, removeItem } = shipmentSlice.actions
export const selectCart = (state) => state.shipment

export default shipmentSlice.reducer
