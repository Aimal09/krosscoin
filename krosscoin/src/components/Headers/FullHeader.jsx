import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/kross-header-logo-dex.png'

function FullHeader() {
  const navigate = useNavigate()
  const [subMenu, setSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  }

  return (
    <div className='header bg-primary px-2 py-[16px] h-[60px] md:px-[24px] md:h-[80px] lg:h-[100px]'>
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
          <NavLink to={"/products"} className="text-white font-bold whitespace-nowrap">
            <span className=''>Terms and Service</span>
          </NavLink>
          <NavLink to={""} className="text-white font-bold">
            <span className=''>Download</span>
          </NavLink>
        </div>
        {/* <NavLink to={""} className="get-started-button h-[50px] w-fit rounded-[15px] items-center justify-center font-bold text-white hidden md:flex md:w-[150px] xl:w-[223px]">Get Started</NavLink> */}

        <div className='relative hidden md:block'>
          <svg width="67" height="43" viewBox="0 0 67 43" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={toggleSubMenu}>
            <path d="M33 13H26H20" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
            <path d="M33 22H21H10" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
            <path d="M33 30H24H15" stroke="white" strokeWidth="2.6875" strokeLinecap="round" />
            <path d="M60.0002 20.17C59.8128 19.9838 59.5594 19.8792 59.2952 19.8792C59.031 19.8792 58.7776 19.9838 58.5902 20.17L55.0002 23.71L51.4602 20.17C51.2728 19.9838 51.0194 19.8792 50.7552 19.8792C50.491 19.8792 50.2376 19.9838 50.0502 20.17C49.9565 20.263 49.8821 20.3736 49.8313 20.4954C49.7805 20.6173 49.7544 20.748 49.7544 20.88C49.7544 21.012 49.7805 21.1427 49.8313 21.2646C49.8821 21.3864 49.9565 21.497 50.0502 21.59L54.2902 25.83C54.3832 25.9237 54.4938 25.9981 54.6156 26.0489C54.7375 26.0997 54.8682 26.1258 55.0002 26.1258C55.1322 26.1258 55.2629 26.0997 55.3848 26.0489C55.5066 25.9981 55.6172 25.9237 55.7102 25.83L60.0002 21.59C60.0939 21.497 60.1683 21.3864 60.2191 21.2646C60.2699 21.1427 60.296 21.012 60.296 20.88C60.296 20.748 60.2699 20.6173 60.2191 20.4954C60.1683 20.3736 60.0939 20.263 60.0002 20.17Z" fill="white"/>
          </svg>

          <div className={"submenu text-center flex flex-col bg-white absolute right-0 top-[100%] " + (subMenu ? "" : "hidden")}>
            <NavLink to={"/products"} className="text-black hover:text-secondary-100 hover:font-bold whitespace-nowrap px-7 py-2">
              <span className=''>Products</span>
            </NavLink>
            <NavLink to={"/products/services"} className="text-black hover:text-secondary-100 hover:font-bold whitespace-nowrap px-7 py-2">
              <span className=''>Services</span>
            </NavLink>
            <NavLink to={"/wallet"} className="text-black hover:text-secondary-100 hover:font-bold whitespace-nowrap px-7 py-2">
              <span className=''>Wallet</span>
            </NavLink>
            <hr className='border'/>
            <NavLink to={"/login"} className="text-black hover:text-secondary-100 hover:font-bold whitespace-nowrap px-7 py-2">
              <span className=''>Login</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullHeader