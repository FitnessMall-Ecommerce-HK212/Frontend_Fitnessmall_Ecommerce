import React from 'react';
import '../../styles/AllProducts.css'
import OptionButton from './optionbutton';

function SideBar(){
    return (
        <div className='sidebar-product'>
            <div className='title pt-5'>
                CÁC SẢN PHẨM VÀ DỊCH VỤ
            </div>
            <OptionButton/>
        </div>
    );
}

export default SideBar;