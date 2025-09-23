import { Outlet } from "react-router-dom";
import HomePage from "../pages/home";
import Footer from "./footer";
import Header from "./header";

const MainLayout = () => {
    return(
    <div className="App">
      <Header/>
        {/* <HomePage/> */}
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default MainLayout