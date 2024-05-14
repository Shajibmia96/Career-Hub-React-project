import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";

const MainLayOut = () => {
    return (
        <div className="container mx-auto">
             <div>
             <Navbar></Navbar>
             <Outlet></Outlet>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default MainLayOut;