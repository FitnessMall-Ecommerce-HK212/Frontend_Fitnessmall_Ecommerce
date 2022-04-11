import React, { useState } from 'react';
import '../../styles/Header.css'
export function CTAButton(e) {
   return (
      <button className="FormSearch_Button" onClick={() => e.onClick()}>{e.value}
      </button>
   )
}
export function GhostButton(e) {
   return (
      <button className="Ghost_Button" onClick={() => e.onClick()}>{e.value}
      </button>
   )
}

export function DropdownButton(e) {
   return (
      <div>
         <select name="kind" className='dropdown-button'>
            <option value="Tất cả đơn hàng">Tất cả đơn hàng</option>
            <option value="Đang xử lý">Đang xử lý</option>
            <option value="Đã đóng gói">Đã đóng gói</option>
            <option value="Đang vận chuyển">Đang vận chuyển</option>
            <option value="Đã giao hàng">Đã giao hàng</option>
            <option value="Đã hủy">Đã hủy</option>
         </select>
      </div>
   )
}
