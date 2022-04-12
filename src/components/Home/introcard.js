import '../../styles/HomePage.css'
import IconCTAButton from './iconCTAbutton';
import {Link} from 'react-router-dom';

function IntroCard(props){
    var link;
    if (props.name === "Fitness Accessories")
        link = '/products/food'
    else if (props.name === "Medical Blogs")
        link = '/blog'
    else 
        link = '/products/personal-training'
    return (
        <Link to={link}>
        <div className="introcard">
            <div className='icon-container'><IconCTAButton/></div>
            <h5 className='name'>{props.name}</h5>
        </div>
        </Link>
    );
}

export default IntroCard;