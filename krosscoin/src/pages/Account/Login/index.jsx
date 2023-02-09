import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FullHeader from '../../../components/Headers/FullHeader'


function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            <FullHeader />
            
            <div className='bg-primary text-white bg-element'>
                <div className='3xl:container py-4 3xl:mx-auto slider px-4'>
                    <div className='py-12 my-12 h-screen md:flex flex-col md:justify-center'>
                        <h3 className='text-center text-secondary-100'>Welcome Back !</h3>
                        <p className="text-center">Login to visit your dashboard</p>

                        <form action="#" className='flex flex-col sm:w-full md:w-4/12 mt-12 mx-auto'>
                            <label className="mb-2" htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder='Enter your email...' required className='mb-5 p-2 rounded' />
                            <label className="mb-2" htmlFor="password">Password</label>
                            <div className='relative mb-5 '>
                                <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='******' required className='p-2 rounded w-full' />
                                <div className='absolute inset-y-0 text-black grid place-items-center right-2' onClick={togglePassword}><i class={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}></i></div>
                            </div>
                            <button className='btn p-2 rounded mt-5'>Login</button>
                            <Link to={""} className='mt-3'>Forget password?</Link>
                            <span className='text-center my-5 pt-5'>New to Purscliq Business? <Link to={""} className='text-secondary-100'> Sign Up</Link> </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login