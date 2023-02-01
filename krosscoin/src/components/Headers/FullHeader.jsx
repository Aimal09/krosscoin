import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/kross-header-logo-dex.png'

function FullHeader() {
  return (
    <div className='header bg-primary px-[24px] py-[16px] h-[100px]'>
      <div className="flex items-center justify-between h-full w-full gap-[57px] 3xl:container 3xl:mx-auto">
        <img src={logo} alt="kross-logo" />
        <div className="-ml-[100px] flex items-center gap-[24px]">
          <NavLink to={""} className="text-white font-bold">
            Exchange
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            Help
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            News
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            Terms and Service
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            Download
          </NavLink>
        </div>
        <NavLink to={""} className="get-started-button w-[223px] h-[50px] rounded-[15px] flex items-center justify-center font-bold text-white">Get Started</NavLink>
      </div>
    </div>
  )
}

export default FullHeader