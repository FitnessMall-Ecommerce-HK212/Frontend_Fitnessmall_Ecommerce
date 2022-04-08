import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    // {amount: 45000000,receiptID: '2TptNFM2sFxEiMtgglQr', shipID: 'JTE123456', state: 'cancel', ts: new Date('2022, 3, 22, 12, 0, 0'), username: 'hongphuc', 
    //     products: {
    //         code: "PT300",
    //         itemType: "z4GKmS8DRQ9YRBX30SLP",
    //         quantity: 10
    //     }
    // },
    { 
        id: '1',
        username: 'Võ Hồng Phúc', 
        diachi: 'Nhà khách ĐHQG, Đông Hòa, Dĩ An, Bình Dương', 
        SDT: '0923784234',
        tongtien: 460000,
        products:[
        { code: 'PT300',
          name: 'Máy chạy bộ Impulse PT300', 
          price: 45000000, 
          image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FPT300_may-chay-bo-impulse.jpg?alt=media&token=ae7a34bd-09ff-4c65-8de6-fd54dcdb7e4e", 
          quantity: 1
        },
        { code: 'PT301', name: 'Tạ tay Brosman', price: 65000, image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FBM5_ta-tay-brosman.jpg?alt=media&token=153c9fc5-8f7f-43a1-bff5-e10a41e692c5", quantity: 1
        },        
        ],
        state: "Đã giao hàng",     
        ngaydat: "01/03/2022",
        ngaygiao: "20/03/2022",
        ghichu: "Giao vào giờ hành chính",
        payment_method: "Ví Zalo pay",
        phivanchuyen: 20000,
        khuyenmai: 10000,
        tongcong: 470000,
        shipmentId: 1,
    },

    { 
        id: '2',
        username: 'Võ Hồng Phúc', 
        diachi: 'Nhà khách ĐHQG, Đông Hòa, Dĩ An, Bình Dương', 
        SDT: '0923784234',
        tongtien: 460000,
        products:[
        { code: 'PT300',
          name: 'Máy chạy bộ Impulse PT300', 
          price: 45000000, 
          image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FPT300_may-chay-bo-impulse.jpg?alt=media&token=ae7a34bd-09ff-4c65-8de6-fd54dcdb7e4e", 
          quantity: 1
        },
        { code: 'PT301', name: 'Tạ tay Brosman', price: 65000, image: "https://firebasestorage.googleapis.com/v0/b/fitness-mall---hcmut.appspot.com/o/item-images%2FBM5_ta-tay-brosman.jpg?alt=media&token=153c9fc5-8f7f-43a1-bff5-e10a41e692c5", quantity: 1
        },
        ],
        state: "Đã hủy",     
        ngaydat: "01/03/2022",
        ngaygiao: undefined,
        ghichu: "Giao tại cổng AH",
        payment_method: "Ví Zalo pay",
        phivanchuyen: 20000,
        khuyenmai: 10000,
        tongcong: 470000,
        shipmentId: 2,

    },
]

const orderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {

    }
})

export const selectOrder = (state) => state.order

export default orderSlide.reducer