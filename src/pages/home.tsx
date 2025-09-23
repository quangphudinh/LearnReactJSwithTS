import { useEffect, useMemo, useRef, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { pizza } from "../models/pizza";
import ItemPizza from "../sections/ItemPizza";
import CountPizza from "../sections/CountPizza";
import { title } from "process";
import ButtonField from "../components/ButtonField";
import TextField from "../components/TextField";
import { IcSprinner } from "../icons/IcSprinner";
import SpinnerLoad from "../components/SpinnerLoad";

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
    const [isLoading , setIsLoading] = useState(false)
    const [skip , setSkip] = useState<number>(0);
    // useEffect(() => {
    //     console.log('Render useEffect');
    //     setPizzas([...pizzas, {id : pizzas.length + 1 , title : 'Pizza Test' , description : 'test useEffect 123'}])
    // },[count]);

    const [pizzaAPI , setPizzaAPI] = useState<pizza[]>([]);

    const handleShowMore = () => {
        setPizzaAPI([])
        setIsLoading(true);
        setSkip(skip + 9)
    }
    
    useEffect(() => {
        const dataFetch = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products?limit=9&skip=${skip}&select=title,description,thumbnail`);
                const data = await res.json();

                const temp : pizza[] = data.products.map((item : any) => ({
                    id : item.id,
                    title : item.title,
                    description : item.description,
                    thumbnail : item.thumbnail
                }));
                setTimeout(() => {
                    setPizzaAPI(temp)
                    setIsLoading(false)
                }, 2000)
                
            } catch (error) {
                console.error(error)
            }
        }
        dataFetch();
    },[skip])


    return(
        <>
            <div style={{height : 'calc(100vh - 309px)', padding : '4rem 4rem' , overflowY : 'auto'}}>
                {
                    !pizzaAPI.length && (
                        <div style={{display : 'flex' , alignItems : 'center' , justifyContent : 'center', height : '100%'}}>
                            <SpinnerLoad></SpinnerLoad>
                        </div>
                    )
                }
                <div className="wrapper-card-items">
                    {
                        // pizzas.map(item =>  
                        //     <CardPizza key={item.id} id={item.id} title={item.title} description={item.description} handleRemovePizza={handleRemovePizza}/>)
                     (pizzaAPI || []).map(item =>  
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
                    <ButtonField loading = {isLoading} onClick={handleShowMore}>Show more</ButtonField>
                </div>
                
            </div>       
                
        </>
    )
}

export default HomePage;