import { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { pizza } from "../models/pizza";
import ItemPizza from "../sections/ItemPizza";
import CountPizza from "../sections/CountPizza";

const HomePage = () => {

    const [pizzas , setPizzas] = useState<pizza[]>([
        {id : 1 , title : 'Pizza Thit Bam' , description : 'Thit phoi 1 nang'},
        {id : 2 , title : 'Pizza Thit Bam 2' , description : 'Ga va muoi'},
        {id : 3 , title : 'Pizza Thit Bam 3' , description : 'Hai San'},
    ]);

    const [person , setPerson] = useState<pizza>({
        title : 'Nine Dev',
        description : 'Hoc Lap Trinh'
    })

    const handleChangePerson = (data : pizza) =>{
        console.log('data : ' ,data);
        setPerson(data);
    }

    const handleRemovePizza = (id : number) =>{
        console.log('ID data removed : ', id)
        const indexPizza = pizzas.findIndex(item => item.id === id);
        let newPizzas = [...pizzas];
        newPizzas.splice(indexPizza , 1);
        setPizzas(newPizzas);
    }

    const [count ,  setCount] = useState(0);
    const [isCount , setIsCount] = useState(false);

    useEffect(() => {
        console.log('Render useEffect');
        setPizzas([...pizzas, {id : pizzas.length + 1 , title : 'Pizza Test' , description : 'test useEffect 123'}])
    },[count]);

    return(
        <>
            {console.log('Render Template')}
            <div style={{height : 'calc(100vh - 309px)', padding : '4rem 4rem' , overflowY : 'auto'}}>
                <div className="wrapper-card-items">
                    {
                        pizzas.map(item =>  
                            <CardPizza key={item.id} id={item.id} title={item.title} description={item.description} handleRemovePizza={handleRemovePizza}/>)
                    }
                    <ItemPizza title={person.title} description={person.description} handleChangePerson={handleChangePerson}/>
                </div>
                <br></br>
                <button className="btn-main" onClick={() => setIsCount(true)}>Open Count</button>
                <button className="btn-main" onClick={() => setIsCount(false)}>Close Count</button>
                <div>{count}</div>
                {
                    isCount && <CountPizza count={count} setCount={(count) => setCount(count)}/>
                }
            </div>       
            <div>
                <button className="btn-main" onClick={() => setCount(count + 1)}>Count Inscrease</button>
            </div>
        </>
    )
}

export default HomePage;