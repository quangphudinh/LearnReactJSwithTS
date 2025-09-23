import { useEffect, useMemo, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { pizza } from "../models/pizza";
import ItemPizza from "../sections/ItemPizza";
import CountPizza from "../sections/CountPizza";
import { title } from "process";
import ButtonField from "../components/ButtonField";
import TextField from "../components/TextField";

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
        // const indexPizza = pizzas.findIndex(item => item.id === id);
         const indexPizza = pizzaAPI.findIndex(item => item.id === id);
        let newPizzas = [...pizzaAPI];
        newPizzas.splice(indexPizza , 1);
        // setPizzas(newPizzas);
        setPizzaAPI(newPizzas)
    }

    const [count ,  setCount] = useState(0);
    const [isCount , setIsCount] = useState(false);

    // useEffect(() => {
    //     console.log('Render useEffect');
    //     setPizzas([...pizzas, {id : pizzas.length + 1 , title : 'Pizza Test' , description : 'test useEffect 123'}])
    // },[count]);

    const [pizzaAPI , setPizzaAPI] = useState<pizza[]>([]);
    
    useEffect(() => {
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(data => {
        //         const temp : pizza[] = data.products.map((item : any) => ({
        //             id : item.id,
        //             title : item.title,
        //             description : item.description,
        //             thumbnail : item.thumbnail
        //         }));
        //         setPizzaAPI(temp)
        //     }).catch((err) => console.error(err));
        // console.log(pizzaAPI)

        const dataFetch = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const data = await res.json();
                console.log(data);
                const temp : pizza[] = data.products.map((item : any) => ({
                    id : item.id,
                    title : item.title,
                    description : item.description,
                    thumbnail : item.thumbnail
                }));
                setPizzaAPI(temp)
            } catch (error) {
                console.error(error)
            }
        }
        dataFetch();
    },[])

    //useMemo
    //tra lai 1 value
    //cache lai data
    //chay lai neu dep[] co su thay doi
    const tinhtong = useMemo(() => {
        return count + 1;
    },[])

    return(
        <>
            {console.log('Render Template')}
            <div style={{height : 'calc(100vh - 309px)', padding : '4rem 4rem' , overflowY : 'auto'}}>
                <TextField placeholder="Enter Search!" width="250px"/>
                <div className="wrapper-card-items">
                    {
                        // pizzas.map(item =>  
                        //     <CardPizza key={item.id} id={item.id} title={item.title} description={item.description} handleRemovePizza={handleRemovePizza}/>)
                     pizzaAPI.map(item =>  
                            <CardPizza key={item.id} id={item.id} title={item.title} description={item.description} thumbnail={item.thumbnail} handleRemovePizza={handleRemovePizza}/>)
                    }
                    <ItemPizza title={person.title} description={person.description} handleChangePerson={handleChangePerson}/>
                </div>
                
                {/* <br></br>
                <button className="btn-main" onClick={() => setIsCount(true)}>Open Count</button>
                <button className="btn-main" onClick={() => setIsCount(false)}>Close Count</button>
                <div>{count}</div>
                {
                    isCount && <CountPizza count={count} setCount={(count) => setCount(count)}/>
                } */}
                
                <div style={{display : 'flex', justifyContent : 'center' , width : '100%'}}>
                    <ButtonField>Show more</ButtonField>
                </div>
                {/* useMemo */}
                <div>
                    {tinhtong}
                    <button onClick={() => setCount(count + 1)}>Tinh Tong</button>
                </div>
                
            </div>       
                
        </>
    )
}

export default HomePage;