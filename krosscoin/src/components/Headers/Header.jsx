import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/kross-header-logo.png'

function Header() {
  const navigate = useNavigate()

  return (
    <div className='header bg-primary px-6 py-4 h-[100px]'>
      <div className="flex items-center h-full gap-[108px] 3xl:container 3xl:mx-auto">
        <img src={logo} alt="kross-logo" className='cursor-pointer' onClick={() => navigate("/")} />
        <NavLink to={""} className="text-white font-bold">
          Home
        </NavLink>
        <NavLink to={"/products"} className="text-white font-bold">
          Products
        </NavLink>
        <NavLink to={""} className="text-white font-bold">
          Services
        </NavLink>
      </div>
    </div>
  )
}

export default Header