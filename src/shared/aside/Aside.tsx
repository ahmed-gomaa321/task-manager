import { ROUTES } from "@/app/constants/routes"
import { NavLink } from "react-router-dom"
import img from '../../assets/images/logo.png'


export const dashboardItems: { label: string, link: string }[] = [
    { label: "dashboard", link: ROUTES.DASHBOARD },
    { label: "Projects List", link: ROUTES.PROJECTS_LIST },
    { label: "Tasks List", link: ROUTES.TASKS_LIST },
    { label: "Members", link: ROUTES.TEAM_MEMBER },
    { label: "Profile", link: ROUTES.PROFILE },
]

export default function Aside() {

    return (
        <aside className='bg-blue-500 h-screen w-0 flex flex-col transition-all duration-500 delay-500 ease-in-out sm:w-[22rem] overflow-y-scroll hide-scroll text-2xl'>
            <div className="mt-10 mb-5 border-b-2 pb-5">
                <img className="rounded-full w-[50px] h-[50px] mx-auto" src={img} alt="" />
            </div>
            {dashboardItems.map((item, index) => <div className="flex justify-center text-center" key={index}>
                <NavLink className={`my-2 w-[14rem] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-blue-500 py-1 px-8 rounded-md`} to={`${item.link}`}>{item.label}</NavLink>
            </div>)}
        </aside>
    )
}
