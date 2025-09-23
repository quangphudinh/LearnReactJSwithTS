import { useLocation } from "react-router-dom";

const CreatePizzaPage = () => {
    const { pathname }= useLocation();

    return(
        <div>This is CreatePage - {pathname}</div>
    )
}

export default CreatePizzaPage;