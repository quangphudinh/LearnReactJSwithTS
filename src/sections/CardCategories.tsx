import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { pizza } from '../models/pizza';
import { categories } from '../models/categories';

//filter dữ liệu đầu vào
//merge type
// type Props = categories & {
//     handleRemovePizza : (id : number) => void
// };

type Props = categories

const CardCategory = (
    {
        name,
        // handleRemovePizza
    } : Props
) => {

    const navigate = useNavigate();

    return(
        <div className='wrapper-sidebar-content'
            onClick={() => console.log(`cate : ${name}`)}
        >
            <div style={{height : '50%' , width : '100%'}}></div>
                <div className='text-sidebar'>
                    {name}
                </div> 
        </div>
    )
};

export default CardCategory;