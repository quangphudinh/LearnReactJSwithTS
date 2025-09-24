import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonField from "../components/ButtonField";
import TextField from "../components/TextField";


const Header = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    return(
         // 1rem = 16px [rem luôn phụ thuộc vào font-size của thẻ html (root)]
        <div className="flex-basic-between" style={{padding : '1.5rem 4rem'}}> 
            <div style={{fontSize : '40px' , fontWeight : 600 , color : pathname.includes('/create-pizza') ? '#191970' : ''}}>
                 <Link to='/' style={{}} className="link-no-style">VNF_COPR</Link> 
            </div>
            <ButtonField loading={false} onClick={() => navigate('/create-pizza')}>
                {/* <Link to='/create-pizza'>Create Pizza</Link> */}
                Create Item
            </ButtonField>
        </div>
    )
};

export default Header;