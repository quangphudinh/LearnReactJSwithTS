import { useEffect, useState } from "react";
import { categories } from "../models/categories";

type Props = categories & {
	handleGetCateData: (name?: string) => void
};

const SideBarCategories = ({ handleGetCateData }: Props) => {
	const [cateList, setCateList] = useState<categories[]>([]);
	// const navigate = useNavigate();

	useEffect(() => {
		const cateDataFetch = async () => {
			const res = await fetch('https://dummyjson.com/products/category-list');
			const data = await res.json();

			const temp: categories[] = data.map((item: any) => ({
				name: item
			}))
			setCateList(temp);
		}
		cateDataFetch();
	}, [])

	const handleFilterCate = (name?: string) => {
		console.log('CardCategories : ', name)
		handleGetCateData(name)
	}

	return (
		<>
			<div style={{ textAlign: 'left' }}>
				{
					cateList.map((item, index) => (
						<div key={index} className='wrapper-sidebar-content' onClick={() => handleFilterCate(item.name)}>
							<div style={{ height: '50%', width: '100%' }}></div>
							<div className='text-sidebar'>
								{item.name}
							</div>
						</div>
					))
				}
			</div>
		</>
	)
}

export default SideBarCategories;