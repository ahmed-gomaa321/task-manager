import { NavLink } from "react-router-dom";
import { dashboardItems } from "../aside/Aside";
import img from '../../assets/images/logo.png'
// import style from './ResponsiveAside.module.css'

export default function ResponsiveAside() {
    return (
        <aside className="w-[15rem] sm:w-0">
            <div className="mt-10 mb-5 border-b-2 pb-5">
                <img className="rounded-full w-[50px] h-[50px] mx-auto" src={img} alt="" />
            </div>
            <div className="flex flex-col text-2xl">
                {dashboardItems.map((item, index) => <div className="flex justify-center" key={index}>
                    <NavLink className={`my-2 transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-blue-500 py-1 px-8 rounded-md`} to={`${item.link}`}>{item.label}</NavLink>
                </div>)}
            </div>
        </aside>
    )
}
