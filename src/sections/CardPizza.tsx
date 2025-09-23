import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { pizza } from '../models/pizza';

//filter dữ liệu đầu vào
//merge type
type Props = pizza & {
    handleRemovePizza : (id : number) => void
};

const CardPizza = (
    {
        id,
        title,
        description,
        thumbnail,
        handleRemovePizza
    } : Props
) => {

    const navigate = useNavigate();

    return(
        <div className="card-items" onClick={() => navigate(`/pizza/${id}`)}>
            <img className="card-image-pizza" src={thumbnail} alt='react-logo'/>
            <div style={{height : '50%' , width : '100%'}}></div>
            <div className='card-content'>
                <div>
                    <div className='text-title'>
                        {title}    
                    </div>
                    <div className='text-description'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardPizza;