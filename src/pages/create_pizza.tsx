import { useLocation, useNavigate } from "react-router-dom";
import LoadingLayout from "../layouts/loading_layout";
import TextField from "../components/TextField";
import ButtonField from "../components/ButtonField";
import { useState } from "react";
import { FieldPizza, pizza } from "../models/pizza";

const CreatePizzaPage = () => {
    const { pathname }= useLocation();
    const [pizza , setPizza] = useState<pizza>({})
    const navigate = useNavigate();   

    const handleChangeFieldPizza = (key: any , value: any) => {
        setPizza({
            ...pizza ,
            [key] : value
        })
    }

    const handleCreatePizza = async() => {
        try {
            if(!pizza.title || !pizza.description || !pizza.price) return;
            const res = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pizza
                })
            })
            const data = await res.json();
            console.log(data)
            if(data?.id) {
                navigate('/')
            }
        } catch (error) {
            
        }
    }

    return(
        <LoadingLayout isLoading={false}>
            <div className="wrapper-create">
                <div style={{width : '50%'}}>
                    <h1>Create New Pizza</h1>
                    <div className="form-control">
                        <div className="form-div">Product Name : </div>
                        <TextField placeholder="Enter product name here..."
                            onChange={(e) => handleChangeFieldPizza(FieldPizza.Title ,e)}
                        />
                    </div>
                    <div className="form-control">
                        <div className="form-div">Description : </div>
                        <TextField placeholder="Enter product description here..."
                            onChange={(e) => handleChangeFieldPizza(FieldPizza.Description ,e)}
                        />
                    </div>
                    <div className="form-control">
                        <div className="form-div">Price : </div>
                        <TextField placeholder="Enter product price here..."
                            onChange={(e) => handleChangeFieldPizza(FieldPizza.Price ,e)}
                        />
                    </div>
                    <div className="form-control" style={{display : 'flex'}}>
                        <ButtonField 
                        onClick={handleCreatePizza}
                        disable={!pizza.title || !pizza.description || !pizza.price}
                        >Submit New Pizza</ButtonField>
                    </div>
                </div>

            </div>
        </LoadingLayout>
    )
}

export default CreatePizzaPage;