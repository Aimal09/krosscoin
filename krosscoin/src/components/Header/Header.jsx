import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/kross-header-logo.png'

function Header() {
  return (
    <div className='bg-primary px-2 py-4 h-[100px]'>
      <div className="flex items-center h-full gap-[108px] 3xl:container 3xl:mx-auto">
        <img src={logo} alt="kross-logo" />
        <NavLink to={""} className="text-white font-bold">
          Home
        </NavLink>
        <NavLink to={""} className="text-white font-bold">
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