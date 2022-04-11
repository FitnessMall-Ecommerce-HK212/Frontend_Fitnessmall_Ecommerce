import React from "react";
function InputSpinner(){
    return (
        <div class="input-spinner">
            <button className="sub">-</button>
            <input type="text" id="qtyBox" value="1"/>
            <button className="add">+</button>
        </div>
    );
}

export default InputSpinner;