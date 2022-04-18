import '../../styles/AllProducts.css'
import RatingStar from '../ProductDetail/ratingstar';
import { GhostButton } from '../Buttons'
import { NavLink } from 'react-router-dom';
function ProductCard(props){
    return(
        <NavLink to={'/products/' + props.type + '/' + props.code}>
        <div className="productcard">
            <div className='card'>
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center justify-content-center">
                    <div className="card-title text-center pt-2">{props.name}<span class="badge bg-warning ms-2">5</span></div>
                    <div className='price justify-content-center'><h5>{props.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h5></div>
                    <div className='moreaction mt-2 d-flex justify-content-center'>
                        <GhostButton value="View Detail"/>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
    );
}

export default ProductCard;