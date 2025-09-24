import { ReactElement } from "react"
import SpinnerLoad from "../components/SpinnerLoad"

type Props = {
    isLoading?: boolean,
    children?: ReactElement
}

const LoadingLayout = ({ isLoading, children }: Props) => {
    return (
        <>
            <div className="wrapper-body">
                {/* Loading */
                    isLoading && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
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