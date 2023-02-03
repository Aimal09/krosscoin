import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/kross-header-logo.png'

function Header() {
  const navigate = useNavigate()

  return (
    <div className='header bg-primary px-6 py-4 h-[60px] md:h-[80px] lg:h-[100px]'>
      <div className="flex items-center h-full justify-between md:justify-start md:gap-[80px] lg:gap-[108px] 3xl:container 3xl:mx-auto">
        <img src={logo} alt="kross-logo" className='cursor-pointer h-[40px] md:h-[60px] lg:h-auto' onClick={() => navigate("/")} />
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer block md:hidden'>
          <path d="M33 13H26H20" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
          <path d="M33 22H21H10" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
          <path d="M33 30H24H15" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
        </svg>

        <div className="hidden items-center md:flex md:gap-[80px] lg:gap-[108px]">
          <NavLink to={""} className="text-white font-bold">
            <span>Home</span>
          </NavLink>
          <NavLink to={"/products"} className="text-white font-bold">
            <span>Products</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span>Services</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header