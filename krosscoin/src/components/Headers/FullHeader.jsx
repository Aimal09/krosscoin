import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/kross-header-logo-dex.png'

function FullHeader() {
  const navigate = useNavigate()

  return (
    <div className='header bg-primary px-[24px] py-[16px] h-[60px] md:h-[80px] lg:h-[100px]'>
      <div className="flex items-center justify-between h-full w-full md:gap-[20px] lg:gap-[57px] 3xl:container 3xl:mx-auto">
        <img src={logo} alt="kross-logo" className='cursor-pointer w-[180px] md:w-[150px] lg:w-[250px] xl:w-auto' onClick={() => navigate("/")} />

        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer block md:hidden'>
          <path d="M33 13H26H20" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
          <path d="M33 22H21H10" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
          <path d="M33 30H24H15" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
        </svg>

        <div className="ml-0 items-center hidden md:flex md:-ml-[10px] md:gap-[16px] lg:gap-[24px] lg:-ml-[50px] xl:-ml-[100px]">
          <NavLink to={""} className="text-white font-bold">
            <span className=''>Exchange</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span className=''>Help</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span className=''>News</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold whitespace-nowrap">
            <span className=''>Terms and Service</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span className=''>Download</span>
          </NavLink>
        </div>
        <NavLink to={""} className="get-started-button h-[50px] w-fit rounded-[15px] items-center justify-center font-bold text-white hidden md:flex md:w-[150px] xl:w-[223px]">Get Started</NavLink>
      </div>
    </div>
  )
}

export default FullHeader