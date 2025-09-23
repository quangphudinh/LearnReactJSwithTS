import ButtonField from "../components/ButtonField";
import TextField from "../components/TextField";

const Header = () => {
    return(
         // 1rem = 16px [rem luôn phụ thuộc vào font-size của thẻ html (root)]
        <div className="flex-basic-between" style={{padding : '1.5rem 4rem'}}> 
            <div style={{fontSize : '40px' , fontWeight : 600}}>9DEVPIZZA</div>
            <TextField placeholder="Enter Search!" width="250px"/>
            <ButtonField loading={true} >Create Pizza</ButtonField>
        </div>
    )
};

export default Header;