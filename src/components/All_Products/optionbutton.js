import React from 'react';
import '../../styles/AllProducts.css'
function OptionButton(){
    return (
        <div className="optionbutton">
            <button type='button' className="btn btn-option btn-lg mt-5 clicked">Thực phẩm dinh dưỡng</button>
            <button type='button' className="btn btn-option btn-lg mt-5">Dụng cụ tập luyện</button>
            <button type='button' className="btn btn-option btn-lg mt-5">Gói Personal Training</button>
        </div>
    );
}

export default OptionButton;