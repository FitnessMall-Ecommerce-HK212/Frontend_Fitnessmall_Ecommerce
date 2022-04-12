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
                <div className="card-body text-center">
                <div className="card-title text-center pt-2">{props.name}</div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-5'>
                            <RatingStar/>
                        </div>
                        <div className='col-7 price'>{props.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                    </div>
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