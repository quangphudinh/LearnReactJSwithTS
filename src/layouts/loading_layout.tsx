import { ReactElement } from "react"
import SpinnerLoad from "../components/SpinnerLoad"

type Props = {
    isLoading? : boolean,
    children? : ReactElement
}

const LoadingLayout = ({isLoading , children} : Props) => {
    return(
        <>
            <div style={{height : 'calc(100vh - 309px)', padding : '4rem 4rem' , overflowY : 'auto'}}>
                {/* Loading */
                    isLoading && (
                        <div style={{display : 'flex' , alignItems : 'center' , justifyContent : 'center', height : '100%'}}>
                            <SpinnerLoad></SpinnerLoad>
                        </div>
                    )
                }{
                    !isLoading && children
                }
        
            </div>                
        </>
    )
}

export default LoadingLayout;