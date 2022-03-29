import '../../styles/HomePage.css'
import SaleTag from './saletag'
function HotdealCard(props){
    return(
        <div className="hotdealcard">
            <div className="card shadow">
                <img src={props.img} class="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    {props.price}
                </div>
            </div>
            {/* <SaleTag className='overlay'/> */}
        </div>
    );
}

export default HotdealCard;