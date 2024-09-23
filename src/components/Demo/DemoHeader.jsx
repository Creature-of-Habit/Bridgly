//import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../data'
import Auth from './Auth/Auth'
import { useEffect, useState } from 'react'
const DemoHeader = () => {
  const [isactive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', scrollMe);
  }, [])
  return (
    <header className="border-b border-black sticky top-0 z-50 bg-transparent text">
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img
            className='h-[4rem]'
            src="src\components\Demo\bridgly_logo.svg"
            alt="logo" 
            color='white'/>
        </Link>
        <div className='flex items-center gap-5'>
          <div className='hidden text-sm sm:flex items-center gap-5'>
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>{link.title}</Link>
            ))}
          </div>
          <div className="relative">
            <button
              onClick={() => setModal(true)}
              className='hidden text-sm sm:flex items-center gap-5'>
              Sign In
              </button>
            <Auth modal={modal} setModal={setModal} />

          </div>
          <button
            onClick={() => setModal(true)}
            className='bg-black text-white rounded-full px3 p-2 text-sm font-medium'>
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default DemoHeader