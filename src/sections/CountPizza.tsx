import { useEffect } from "react"

type Props = {
  count: number;
  setCount: (count: number) => void;
};

const CountPizza = ({count ,setCount} : Props) => {
    useEffect(() => {
        return () => {
            setCount(0)
        }
    }, [])

    return(
        <>
            <button className="btn-main" onClick={() => setCount(count + 1)}>INSCREASE</button>
        </>
    )
}

export default CountPizza;