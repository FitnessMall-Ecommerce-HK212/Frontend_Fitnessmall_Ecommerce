import '../../styles/AllProducts.css'
import RatingStar from '../ProductDetail/ratingstar';
import { GhostButton } from '../Buttons'
function ProductCard(props){
    return(
        <div className="productcard">
            <div className='card'>
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                <div className="card-title text-center">{props.name}</div>
                    <p className="card-text">{props.description}</p>
                    <div className='price row d-flex justify-content-center'>
                        <div className='col-7'>
                            <RatingStar/>
                        </div>
                        <div className='col-5' style={{fontSize: '20px'}}>{props.price}</div>
                    </div>
                    <div className='moreaction mt-2 d-flex justify-content-center'>
                        <GhostButton value="View Detail"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;