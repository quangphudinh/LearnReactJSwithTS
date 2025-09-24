import { useEffect, useState } from "react";
import { categories } from "../models/categories";
import { useNavigate } from "react-router-dom";
import CardCategory from "../sections/CardCategories";

type Props = categories & {
    handleGetCateData : (name? : string) => void
};

const SideBarCategories = ({handleGetCateData} : Props) => {

    const [cateList , setCateList] = useState<categories[]>([]);
    // const navigate = useNavigate();

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

    const handleFilterCate = (name? : string) => {
        console.log('CarddCategories : ',name)
        handleGetCateData(name)
    }

    return(
        <>
        <div style={{textAlign : 'left' }}>
            {
                cateList.map(item =>  
                    <CardCategory handleFilterCate={(e) => handleFilterCate(e)} name={item.name}/>
                )           
            }
        </div>
            
        </>
    )
}

export default SideBarCategories;