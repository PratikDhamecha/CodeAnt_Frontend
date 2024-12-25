import { Outlet } from "react-router-dom";
import Sidebar from "../home/sidebar/Sidebar";
import MobileSidebar from "./sidebar/Mobile_sidebar";

function HomeLayout() {
    return (
        <>
        <div className="flex min-h-screen bg-background">
            <div className="hidden sm:block">
                {/* Sidebar for large screens */}
                <Sidebar />
            </div>
            <div className="block sm:hidden">
                {/* MobileSidebar for small screens */}
                <MobileSidebar />
            </div>
            <Outlet />
        </div>
        </>
    )
}

export default HomeLayout;