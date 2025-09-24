import { useEffect, useState } from "react";
import { categories } from "../models/categories";
import { useNavigate } from "react-router-dom";
import CardCategory from "../sections/CardCategories";

const SideBarCategories = () => {

    const [cateList , setCateList] = useState<categories[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cateDataFetch = async() => {
            const res =  await fetch('https://dummyjson.com/products/category-list');
            const data = await res.json();
            
            const temp : categories[] = data.map((item : any) => ({
                name : item
            }))
            setCateList(temp);
        }
        cateDataFetch();
    },[])

    return(
        <>
        <div style={{textAlign : 'left' }}>
            {
                cateList.map(item =>  
                    <CardCategory name={item.name}></CardCategory>
                )           
            }
        </div>
            
        </>
    )
}

export default SideBarCategories;