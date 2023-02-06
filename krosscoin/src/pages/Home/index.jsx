import React from 'react'
import { Link } from 'react-router-dom'
import FullHeader from '../../components/Headers/FullHeader'
import krossicon from '../../assets/images/main-krosscoin-icon.png'
import logo from '../../assets/images/krosscoing-logo-b.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import telegram from '../../assets/images/telegram.png'
// eslint-disable-next-line no-unused-vars
import style from './style.css'

function Home() {
    return (
        <>
            <FullHeader />
            <div className='bg-primary text-white bg-element home-page'>
                <div className='3xl:container py-4 3xl:mx-auto slider'>
                    <div className='flex flex-wrap items-center px-4'>
                        <div className='w-full md:w-6/12 content'>
                            <h1>Trusted and innovative blockchain solution</h1>
                            <h3 className='my-5'>Hashgreed is a community driven network</h3>
                            <button className='btn px-8 py-3 rounded-lg mt-10'>Wallet & Dex</button>
                        </div>
                        <div className='sm:w-full md:w-6/12 main-icon'>
                            <img src={krossicon} alt="" className='mx-auto' />
                        </div>
                    </div>
                </div>

                <div className="about py-5">
                    <div className='3xl:container 3xl:mx-auto py-12 px-4'>
                        <h1 className='text-center mb-10'>About Krosscoin</h1>
                        <p>Krosscoin is a very elegant concept: we build innovative apps that have a large customer base potential. We also allow third-party developer apps into our ecosystem. All apps are monetized with KSS tokens using a ‘’PAY-AS-YOU-USE’’ framework.
                            This allows app developers to make interesting and highly functional apps, and lets the end-consumer pay for only the functions accessed, when they access or use it.
                            Our first apps utilizing the Krosscoin Platform is the patent pending Pipdroid app family. Pipdroid apps lets forex and crypto traders launch and manage trading bots right from their smartphones. Imagine being able to access and launch bots to both forex broker platforms and crypto exchanges, right from your hand held device, anywhere you are!!. Join us as we revolutionize one industry after the other with our amazing applications</p>
                    </div>
                </div>

                <div className="footer py-5">
                    <div className='3xl:container 3xl:mx-auto py-12 px-4 footer-content'>
                        <div className="flex items-center gap-[100px]">
                            <img src={logo} alt="krosscoin logo" />
                            <p>Copyright &copy; 2018-2023 Vinekross LLC. All Rights Reserved</p>
                        </div>
                        <div className="flex items-center my-10 text-2xl gap-[10px]">
                            <Link to={""}>support@krosscoin.io</Link>
                            <p>|</p>
                            <Link to={""}>vinekrossllc@gmail.com</Link>
                        </div>

                        <div className="flex gap-[15px]">
                            <div className="flex items-center w-full md:w-9/12 flex-wrap text-2xl gap-[10px]">
                                <Link to={""}>Privacy policy</Link>
                                <p>|</p>
                                <Link to={""}>Terms and Conditions</Link>
                                <p>|</p>
                                <Link to={""}>KSS Node Guide (Windows and Linux)</Link>
                                <p>|</p>
                                <Link to={""}>krosschain Desktop Wallet Guide</Link>
                            </div>
                            <div className="flex items-center w-full md:w-3/12 flex-wrap text-2xl gap-[50px] justify-end">
                                <Link to={""}><img src={twitter} alt="" /></Link>
                                <Link to={""}><img src={facebook} alt="" /></Link>
                                <Link to={""}><img src={telegram} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home