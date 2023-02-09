import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FullHeader from '../../../components/Headers/FullHeader'

function Create() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [cPasswordShown, setCPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const toggleCPassword = () => {
        setCPasswordShown(!cPasswordShown);
    };
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            <FullHeader />

            <div className='bg-primary text-white bg-element'>
                <div className='3xl:container py-4 3xl:mx-auto slider px-4'>
                    <div className='py-12 my-12 md:h-screen md:flex flex-col md:justify-center'>
                        <h3 className='text-center text-2xl text-secondary-100'>Create an account</h3>
                        <p className="text-center text-lg">Sign up to create your merchant account</p>

                        <form action="#" className='flex flex-wrap sm:w-full md:w-4/12 mt-12 mx-auto'>
                            <div className="w-6/12 px-2">
                                <label className="mb-2" htmlFor="fname">First name</label>
                                <input type="text" name="fname" id="fname" placeholder='Enter your First name...' required className='bg-transparent mb-5 p-2 rounded w-full' />
                            </div>

                            <div className="w-6/12 px-2">
                                <label className="mb-2" htmlFor="lname">Last name</label>
                                <input type="text" name="lname" id="lname" placeholder='Enter your Last name...' required className='bg-transparent mb-5 p-2 rounded w-full' />
                            </div>

                            <div className="w-full px-2">
                                <label className="mb-2" htmlFor="phone">Phone Address</label>
                                <div className="flex">
                                    <select name="phonecode" id="phonecode" className='mb-5 p-2 text-black rounded-l'>
                                        <option value="92">+91</option>
                                        <option value="92">+92</option>
                                        <option value="92">+93</option>
                                    </select>
                                    <input type="text" name="phone" id="phone" placeholder='0000000000' required className='bg-transparent mb-5 p-2 rounded-r w-full' />
                                </div>
                            </div>

                            <div className="w-full px-2">
                                <label className="mb-2" htmlFor="email">Email Address</label>
                                <input type="email" name="email" id="email" placeholder='Enter your email...' required className='bg-transparent mb-5 p-2 rounded w-full' />
                            </div>

                            <div className="w-full px-2">
                                <label htmlFor="password" className='block'>Create your Password</label>
                                <label htmlFor="password" className='block mb-5 text-slate-400'>enter your password</label>
                            </div>

                            <div className="w-6/12 px-2">
                                <label className="mb-2" htmlFor="password">Enter Password</label>
                                <div className='relative mb-5 '>
                                    <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='******' required className='p-2 rounded w-full bg-transparent' />
                                    <div className='absolute inset-y-0 grid place-items-center right-2' onClick={togglePassword}><i class={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}></i></div>
                                </div>
                            </div>

                            <div className="w-6/12 px-2">
                                <label className="mb-2" htmlFor="cpassword">Confirm Password</label>
                                <div className='relative mb-5 '>
                                    <input type={cPasswordShown ? "text" : "password"} name="cpassword" id="cpassword" placeholder='******' required className='p-2 rounded w-full bg-transparent' />
                                    <div className='absolute inset-y-0 grid place-items-center right-2' onClick={toggleCPassword}><i class={cPasswordShown ? "fas fa-eye-slash" : "fas fa-eye"}></i></div>
                                </div>
                            </div>

                            <div className="flex items-start my-5 px-2">
                                <input type="checkbox" id='agreeterms' className='bg-transparent mt-1 mr-3' />
                                <label htmlFor="agreeterms">By clicking 'Continue', you acknowledge that you have read and accept the<Link to={""} className="text-secondary-100">Terms of Service and Privacy Policy.</Link></label>
                            </div>

                            <button className='btn p-2 w-full rounded mt-5'>Login</button>
                            <span className='text-center block w-full my-5 pt-5'><span className='text-slate-400'>Already have an account ? </span>  <Link to={""} className='text-secondary-100'> Login</Link> </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;