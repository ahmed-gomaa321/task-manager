import errorImg from "@/assets/images/errorElement.jpg"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { ROUTES } from "@/app/constants/routes";

export default function ErrorElement() {
    return (
        <section className="flex flex-col justify-center items-center mt-5">
            <img className="h-[500px] rounded-md" src={errorImg} alt="notFound" />
            <div className="flex items-center gap-3 font-medium text-blue-500 hover:text-blue-700 text-2xl">
                <Link to={ROUTES.DASHBOARD_LAYOUT}>back to Home page</Link>
                <FaHome />
            </div>
        </section>
    )
}
