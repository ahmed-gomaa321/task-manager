import Footer from '@/shared/footer/Footer'
import Navbar from '@/shared/mainNavbar/MainNavbar'
import { Outlet } from 'react-router-dom'

export default function () {
    return (
        <div className='mt-14'>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
