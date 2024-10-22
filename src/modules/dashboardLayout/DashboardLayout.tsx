import Aside from "@/shared/aside/Aside";
import DashboardNavbar from "@/shared/dashboardNavbar/DashboardNavbar";
import ResponsiveAside from "@/shared/responsiveAside/ResponsiveAside";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)} className="fixed left-5 top-5 text-2xl cursor-pointer z-30 sm:hidden">
                <FaBars />
            </div>
            <div className='flex'>
                <div className={`fixed left-0 top-0 bottom-0 bg-blue-500 transition-all duration-500 overflow-y-scroll hide-scroll ${isOpen? 'h-full opacity-100 z-20': 'h-0 opacity-0' }`}>
                    <ResponsiveAside />
                </div>
                <Aside />
                <div className='flex flex-col w-full'>
                    <DashboardNavbar />
                    <div className="h-[calc(100vh-4rem)] overflow-scroll hide-scroll">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
