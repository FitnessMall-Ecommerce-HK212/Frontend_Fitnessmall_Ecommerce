import { useEffect, useState } from "react";
function InputSpinner(props){
    return (
        <div class="input-spinner">
            <button className="sub">-</button>
            <input type="text" value='1'/>
            <button className="add">+</button>
        </div>
    );
}

export default InputSpinner;