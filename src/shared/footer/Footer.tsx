import { ROUTES } from '@/app/constants/routes'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='bg-gray-300 py-8 px-5 mt-10 footer'>
            <div className='container mx-auto flex items-center justify-center gap-3 font-semibold  pb-5 border-b-2 border-blue-500 text-white'>
                <Link className='hover:text-blue-500' to={ROUTES.MAIN}>About</Link>
                <Link className='hover:text-blue-500' to={ROUTES.MAIN}>Contact</Link>
                <Link className='hover:text-blue-500' to={ROUTES.MAIN}>Services</Link>
            </div>
            <p className='py-5 text-center font-semibold text-white'>
                Copyright © 2024 Task Manager
            </p>
        </footer>
    )
}
