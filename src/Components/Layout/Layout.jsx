import style from './Layout.module.css'
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

export default function Layout() {
    return (
        <div className={style.layout}>
            <Navbar />
            <div className={style.main}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}