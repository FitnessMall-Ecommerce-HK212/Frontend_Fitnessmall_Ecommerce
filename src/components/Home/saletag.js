import '../../styles/Home.css'
function SaleTag(){
    return(
        <div className='saletag'>
            <div className='container'>
                <div className='rectangle' style={{width: '90px', height: '50px', backgroundColor: 'yellow'}}>
                    30%
                </div>
                <div className='triangle'></div>
            </div>
            
        </div>
    );
}

export default SaleTag;