import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FieldPizza, pizza } from "../models/pizza";
import LoadingLayout from "../layouts/loading_layout";
import ButtonField from "../components/ButtonField";
import ModalLayout from "../layouts/modal_layout";
import TextField from "../components/TextField";

type Props = {
    id : number;
    title? : string;
    description? : string;
    thumbnail? :  string;
    price? : string;
}

const EditPizza = () => {

    const {id} = useParams();
    const [pizza , setPizza] = useState<pizza>({});
    const navigate = useNavigate()
    const [isModal , setIsModal] = useState(false);

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


      const handleChangeFieldPizza = (key: any , value: any) => {
        setPizza({
            ...pizza ,
            [key] : value
        })
    }

    const handleEditPizza = async() => {
        try {
            console.log(pizza);
            if(!pizza.title || !pizza.description || !pizza.price) return;
            const res = await fetch('https://dummyjson.com/products/1', {
                method: 'PUT', /* or PATCH */
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
            console.error(error)
        }
    }

    return(
        <>
              <LoadingLayout isLoading={!pizza.id}>
                <div style={{display :  'flex' , alignItems : "center" , columnGap : '2rem'}}>
                    <img width='450px' height='450px' src={pizza.thumbnail} alt="" />
                    <div style={{width : '50%'}}>
                        <div className="form-control">
                            <div className="form-div">Product Name : </div>
                            <TextField value={pizza.title}
                                onChange={(e) => handleChangeFieldPizza(FieldPizza.Title ,e)}
                            />
                        </div>
                        <div className="form-control">
                            <div className="form-div">Description : </div>
                            <TextField value={pizza.description}
                                onChange={(e) => handleChangeFieldPizza(FieldPizza.Description ,e)}
                            />
                        </div>
                        <div className="form-control">
                            <div className="form-div">Price : </div>
                            <TextField value={pizza.price}
                                onChange={(e) => handleChangeFieldPizza(FieldPizza.Price ,e)}
                            />
                        </div>
                        <div className="form-control" style={{display : 'flex'}}>
                            <ButtonField 
                            onClick={handleEditPizza}
                            disable={!pizza.title || !pizza.description || !pizza.price}
                            >Update Product</ButtonField>
                        </div>
                    </div>
                        
                    <ModalLayout 
                        width="40%" 
                        title="Do you want update this product!" 
                        isShow = {isModal}
                        onClose={() => setIsModal(false)}
                        onConfirm={() => console.log('modal ')}
                    />
                </div>         
            </LoadingLayout>
        </>
    )
};

export default EditPizza;
