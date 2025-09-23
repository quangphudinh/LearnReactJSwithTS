import { useParams } from "react-router-dom";
import logo from '../assets/logo.svg'
import ButtonField from "../components/ButtonField";
import { pizza } from "../models/pizza";
import { useEffect, useState } from "react";
import SpinnerLoad from "../components/SpinnerLoad";
import LoadingLayout from "../layouts/loading_layout";

const DetailPizza = () => {

    const {id} = useParams();
    const [pizza , setPizza] = useState<pizza>({});

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();

                const temp : pizza = {
                        id : data.id,
                        title : data.title,
                        description : data.description,
                        thumbnail : data.thumbnail
                    }
                setTimeout(() => {
                    setPizza(temp); 
                }, 1000)

            } catch (error) {
                console.error(error);
            }
        }
        getData();
    },[id])

    return(
        <>
            <LoadingLayout isLoading={!pizza.id}>
                <div style={{display :  'flex' , alignItems : "center" , columnGap : '2rem'}}>
                    <img width='450px' height='450px' src={pizza.thumbnail} alt="" />
                    <div style={{alignItems : ''}}>
                        <div style={{marginBottom : '1rem'}}>
                            Product Name : <span style={{fontSize : '24px'}}>{pizza.title}</span>
                        </div>
                        <div style={{marginBottom : '1.5rem'}}>
                            Ingredients : <span style={{fontSize : '24px'}}>{pizza.description}</span>
                        </div>
                        <div style={{display : 'flex'}}>
                            <ButtonField>Add to cart</ButtonField>
                        </div>
                    </div>
                </div>         
            </LoadingLayout>
        </>
    )
}

export default DetailPizza;