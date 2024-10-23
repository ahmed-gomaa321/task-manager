import { FaHandPointDown } from 'react-icons/fa'
import style from './LandingPage.module.css'
import { Link} from 'react-router-dom'
import { ROUTES } from '@/app/constants/routes';
export default function LandingPage() {
  return (
    <>
      <section className={`h-screen ${style.hero} bg-cover`} >
        <div className='flex flex-col justify-center items-center h-full text-center'>
          <h2 className='text-3xl font-bold text-blue-500'>
            Welcome to TaskMaster!
          </h2>
          <p className='py-4 px-5 sm:px-20 text-2xl font-semibold text-gray-300'>
            Take cont <span></span>rol of your tasks and boost your productivity with ease. Whether you're managing personal projects or collaborating with a team, TaskMaster provides you with the tools you need to stay organized and on top of your game.
          </p>
        </div>
      </section>
      <section className='mt-14 px-8'>
        <div className='mt-8 text-center'>
          <h2 className='font-bold text-3xl text-blue-500'>Get Started Today!</h2>
          <p className='py-4 px-5 sm:px-20 text-2xl font-semibold text-gray-700'>Ready to experience seamless task management?
            <span className='font-bold mx-2 '>
              Click below to begin your journey with TaskMaster.<FaHandPointDown className='text-blue-500 inline' />
            </span>
          </p>
          <div className='mt-4'>
            <div className='flex items-center justify-center gap-5'>
              <p className='font-semibold'>
                Create an account and start managing your tasks effortlessly
              </p>
              <Link to={ROUTES.REGISTER} className='text-gray-600 hover:text-blue-500 font-bold'>Sign Up</Link>
            </div>
            <div className='flex items-center justify-center gap-5'>
              <p className='font-semibold'>
                Already have an account? Log in to access your projects
              </p>
              <Link to={ROUTES.LOGIN} className='text-gray-600 hover:text-blue-500 font-bold'>Login</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
