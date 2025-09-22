import { title } from "process";
import { pizza } from "../models/pizza";

//merge type
type Props =  pizza & {
    handleChangePerson : (data : pizza) => void
};

const ItemPizza = ({
    title ,
    description,
    handleChangePerson
} : Props) => {
    return(
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <button onClick={() => handleChangePerson({title : 'Phu 2025' , description : 'Hoc lap trinh 2025'})}>Change Person</button>
        </div>
    )
}

export default ItemPizza;