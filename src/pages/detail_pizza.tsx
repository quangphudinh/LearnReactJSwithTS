import { useNavigate, useParams } from "react-router-dom";
import ButtonField from "../components/ButtonField";
import { pizza } from "../models/pizza";
import { useEffect, useState } from "react";
import LoadingLayout from "../layouts/loading_layout";
import ModalLayout from "../layouts/modal_layout";

const DetailPizza = () => {

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

    const handleRemove = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',
            })
            const data = await res.json();
            if(data.isDeleted)(
                navigate('/')
            )
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            <LoadingLayout isLoading={!pizza.id}>
                <div style={{display :  'flex' , alignItems : "center" , columnGap : '2rem'}}>
                    <img width='450px' height='450px' src={pizza.thumbnail} alt="" />
                    <div style={{textAlign : 'left'}}>
                        <div style={{marginBottom : '1rem'}}>
                            Product Name : <span style={{fontSize : '24px'}}>{pizza.title}</span>
                        </div>
                        <div style={{marginBottom : '1.5rem'}}>
                            Ingredients : <span style={{fontSize : '24px'}}>{pizza.description}</span>
                        </div>                       
                        <div style={{display : 'flex' , gap : '10px'}}> {/* , justifyContent : 'flex-end' */}
                            <ButtonField onClick={() => setIsModal(true)}>Remove Item</ButtonField>
                            <ButtonField onClick={() => navigate(`/edit-pizza/${id}`)}>Edit Item</ButtonField>
                        </div>
                        

                    </div>
                    <ModalLayout 
                        width="40%" 
                        title="Do you want remove this Pizza" 
                        isShow = {isModal}
                        onClose={() => setIsModal(false)}
                        onConfirm={handleRemove}
                    />

                </div>         
            </LoadingLayout>
        </>
    )
}

export default DetailPizza;