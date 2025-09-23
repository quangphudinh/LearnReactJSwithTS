import { ReactNode } from "react";
import { IcSprinner } from "../icons/IcSprinner";

type Props = {
    loading? : boolean;
    children? : ReactNode;
    color?: 'main' | 'primary'
    onClick?:() => void;
}

const ButtonField = ({loading , children , color , onClick} : Props) => {
    return(
        <>
            <div className={`btn btn-${color}`} onClick={onClick && onClick}>
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
