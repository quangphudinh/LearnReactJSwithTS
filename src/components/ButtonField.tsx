import { ReactNode } from "react";
import { IcSprinner } from "../icons/IcSprinner";

type Props = {
    loading? : boolean;
    children? : ReactNode;
    color?: 'main' | 'primary';
    disable? : boolean
    onClick?:() => void; 
}

const ButtonField = ({loading , children , color , disable, onClick} : Props) => {
    const handleOnClick = () => {
        if(disable) return;
        onClick && onClick();
    }
   
    return(
        <>
            <div className={`btn btn-${color}  ${disable ? 'disable' : ''}`} onClick={handleOnClick}>
                {!loading
                    ?children
                    : <div style={{display : 'flex' , alignItems : 'center' , columnGap : '.5rem', color: '#fff'}}>
                        <IcSprinner width="32px" height="32px"></IcSprinner>
                        {children}
                    </div>
                }
            </div>
        </>
    )
};

export default ButtonField;
