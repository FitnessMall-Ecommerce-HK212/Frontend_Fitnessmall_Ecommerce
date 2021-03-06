import '../../styles/AllProducts.css'
import { GhostButton } from '../Buttons'
import { NavLink } from 'react-router-dom';

function ProductCard(props){
    return(
        <div className='productcard'>
            <NavLink to={'/products/' + props.type + '/' + props.code}>
            <div className='card'>
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center justify-content-center">
                    <div className="card-title text-center pt-2">{props.name}<span class="badge bg-warning ms-2">{props.point.toFixed(1)}</span></div>
                    <div className='price justify-content-center'><h5>{props.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h5></div>
                    <div className='moreaction mt-2 d-flex justify-content-center'>
                        <GhostButton value="Xem chi tiết" onClick={() => { }}/>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    );
}

export default ProductCard;