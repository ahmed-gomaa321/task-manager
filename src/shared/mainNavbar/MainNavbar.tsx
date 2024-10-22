import { ROUTES } from '@/app/constants/routes'
import { NavLink } from 'react-router-dom'
import logoImg from '@/assets/images/logo.png'
import { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa6";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { label: "Home", link: ROUTES.MAIN },
        { label: "Login", link: ROUTES.LOGIN },
        { label: "Register", link: ROUTES.REGISTER },
    ]
    return (
        <div className='fixed top-0 inset-x-0 px-5 py-3 bg-gray-200'>
            <div className='relative container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                <div className='absolute right-0 top-2 cursor-pointer'>
                    <FaAlignJustify className='sm:hidden text-2xl' onClick={() => setIsOpen(!isOpen)} />
                </div>
                <div>
                    <img className='w-[80px] rounded-lg' src={logoImg} alt="task-manager-logo" />
                </div>
                <div>
                    <ul onClick={() => setIsOpen(!isOpen)} className={`sm:flex flex-col sm:flex-row mt-5 sm:mt-0 sm:items-center gap-2 ${isOpen ? 'visible' : 'hidden'}`}>
                        {navItems.map((item, index) =>
                            <li key={index}>
                                <NavLink className='py-1 px-2 rounded-md' to={item.link}>{item.label}</NavLink>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
