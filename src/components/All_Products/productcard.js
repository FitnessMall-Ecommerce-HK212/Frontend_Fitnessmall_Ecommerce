import '../../styles/AllProducts.css'
function ProductCard(){
    return(
        <div className="productcard">
            <div className='card' style={{width: '250px'}}>
                <img src="https://static.onecms.io/wp-content/uploads/sites/35/2020/03/24/workout-dice-bells-tout1244x1244.jpg" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <div className="card-title text-center">Lorem ipsum</div>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                    <button onClick={''} className='btn view-detail'>View detail</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;