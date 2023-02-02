import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/kross-header-logo-dex.png'

function FullHeader() {
  const navigate = useNavigate()

  return (
    <div className='header bg-primary px-[24px] py-[16px] h-[100px]'>
      <div className="flex items-center justify-between h-full w-full gap-[57px] 3xl:container 3xl:mx-auto">
        <img src={logo} alt="kross-logo" className='cursor-pointer' onClick={() => navigate("/")} />
        <div className="-ml-[100px] flex items-center gap-[24px]">
          <NavLink to={""} className="text-white font-bold">
            <span>Exchange</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span>Help</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span>News</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span>Terms and Service</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span>Download</span>
          </NavLink>
        </div>
        <NavLink to={""} className="get-started-button w-[223px] h-[50px] rounded-[15px] flex items-center justify-center font-bold text-white">Get Started</NavLink>
      </div>
    </div>
  )
}

export default FullHeader