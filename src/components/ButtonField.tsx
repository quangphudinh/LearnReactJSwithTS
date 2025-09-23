import { ReactNode } from "react";
import { IcSprinner } from "../icons/IcSprinner";

type Props = {
    loading? : boolean;
    children? : ReactNode;
}

const ButtonField = ({loading , children} : Props) => {
    return(
        <>
            <div className="btn-main">
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
