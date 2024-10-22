import { ROUTES } from "@/app/constants/routes"
import notFoundImg from "@/assets/images/featured-404-error-image.png"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
    return (
        <section className="flex flex-col justify-center items-center">
            <img className="h-[500px]" src={notFoundImg} alt="notFound" />
            <div className="flex items-center gap-3 font-medium text-blue-500 hover:text-blue-700 text-2xl">
                <Link to={ROUTES.DASHBOARD_LAYOUT}>back to Home page</Link>
                <FaHome />
            </div>
        </section>
    )
}
