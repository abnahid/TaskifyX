import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const noHadarFooter =
        location.pathname.includes("login") ||
        location.pathname.includes("register");
    return (
        <div>
            {noHadarFooter || <Navbar />}
            <div className="bg-gray-50">
                <Outlet />
            </div>
            {noHadarFooter || <Footer />}
        </div>
    );
};

export default MainLayout;