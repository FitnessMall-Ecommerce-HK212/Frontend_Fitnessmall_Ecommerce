import '../../styles/HomePage.css'
import {Link} from 'react-router-dom'
function HotBlogCard(props){
    return(
        <Link to={"/blog/detail/"+props.id}>
        <div className='hotblogcard'>
            <div class="card shadow">
            <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-center">{props.tags}</h5>
                <p class="card-text text-center">{props.title}</p>
            </div>
            </div>
        </div>
        </Link>
    );
}

export default HotBlogCard