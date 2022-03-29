import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
]

const orderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {

    }
})

export const selectOrder = (state) => state.order

export default orderSlide.reducer