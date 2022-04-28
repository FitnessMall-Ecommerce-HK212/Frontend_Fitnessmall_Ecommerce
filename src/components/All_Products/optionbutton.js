import '../../styles/AllProducts.css'
import {NavLink} from 'react-router-dom'

function OptionButton(){
    return (
        <div className="optionbutton mb-5">
            <NavLink to='/products/food' activeStyle={{color: 'white', background: '#FFA5CB'}} type='button' className="btn btn-option btn-lg mt-5">Thực phẩm dinh dưỡng</NavLink>
            <NavLink to='/products/equipment' activeStyle={{color: 'white', background: '#FFA5CB'}} type='button' className="btn btn-option btn-lg mt-5">Dụng cụ tập luyện</NavLink>
            <NavLink to='/products/personal-training' activeStyle={{color: 'white', background: '#FFA5CB'}} className="btn btn-option btn-lg mt-5">Gói Personal Training</NavLink>
        </div>
    );
}

export default OptionButton;