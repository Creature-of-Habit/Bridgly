//import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../data'
import Auth from './Auth/Auth'
const DemoHeader = () => {
  return (
    <header className="border-b border-black sticky top-0 z-50 bg-transparent">
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img
            className='h-[1.5rem]'
            src="src\components\Demo\Medium_(2).svg"
            alt="logo" />
        </Link>
        <div className='flex items-center gap-5'>
          <div className='hidden text-sm sm:flex items-center gap-5'>
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>{link.title}</Link>
            ))}
          </div>
          <div className="relative">
            <button className='hidden text-sm sm:flex items-center gap-5'>
              Sign In
              </button>
              <Auth/>

          </div>
          <button className='bg-black text-white rounded-full px3 p-2 text-sm font-medium'>
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default DemoHeader