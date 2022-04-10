import '../../styles/AllProducts.css'
function ProductCard(props){
    return(
        <div className="productcard">
            <div className='card'>
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <div className="card-title text-center">{props.name}</div>
                    <p className="card-text">{props.description}</p>
                    <div className='price'>{props.price}</div>
                    <button onClick={''} className='btn view-detail'>View detail</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;