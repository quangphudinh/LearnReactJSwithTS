import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { pizza } from '../models/pizza';
import { categories } from '../models/categories';

//filter dữ liệu đầu vào
//merge type

type Props = categories & {
    handleFilterCate : (name? : string) => void
};

const CardCategory = (
    {
        name,
        handleFilterCate
    } : Props
) => {

    const navigate = useNavigate();

    return(
        <div key={name} className='wrapper-sidebar-content' onClick={() => handleFilterCate(name)}>
            <div style={{height : '50%' , width : '100%'}}></div>
                <div className='text-sidebar'>
                    {name}
                </div> 
        </div>
    )
};

export default CardCategory;