import React from 'react'
import { Link } from 'react-router-dom'
import krossicon from '../../assets/images/main-krosscoin-icon.png'
import logo from '../../assets/images/krosscoing-logo-b.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import telegram from '../../assets/images/telegram.png'
import style from './style.css'

function Home() {
    return (
        <div className='bg-primary text-white py-4 bg-element'>
            <div className='3xl:container 3xl:mx-auto'>
                <div className='flex gap-[50px] items-center mb-5'>
                    <div className='w-6/12 content'>
                        <h1>Trusted and innovative blockchain solution</h1>
                        <h3 className='my-5'>Hashgreed is a community driven network</h3>
                        <button className='btn px-8 py-3 rounded-lg mt-10'>Wallet & Dex</button>
                    </div>
                    <div className='w-6/12'>
                        <img src={krossicon} className='mx-auto' />
                    </div>
                </div>
            </div>

            <div className="about py-5">
                <div className='3xl:container 3xl:mx-auto py-12'>
                    <h1 className='text-center mb-10'>About Krosscoin</h1>
                    <p>Krosscoin is a very elegant concept: we build innovative apps that have a large customer base potential. We also allow third-party developer apps into our ecosystem. All apps are monetized with KSS tokens using a ‘’PAY-AS-YOU-USE’’ framework.
                        This allows app developers to make interesting and highly functional apps, and lets the end-consumer pay for only the functions accessed, when they access or use it.
                        Our first apps utilizing the Krosscoin Platform is the patent pending Pipdroid app family. Pipdroid apps lets forex and crypto traders launch and manage trading bots right from their smartphones. Imagine being able to access and launch bots to both forex broker platforms and crypto exchanges, right from your hand held device, anywhere you are!!. Join us as we revolutionize one industry after the other with our amazing applications</p>
                </div>
            </div>

            <div className="footer py-5">
                <div className='3xl:container 3xl:mx-auto py-12'>
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
                        <div className="flex items-center w-9/12 flex-wrap text-2xl gap-[10px]">
                            <Link to={""}>Privacy policy</Link>
                            <p>|</p>
                            <Link to={""}>Terms and Conditions</Link>
                            <p>|</p>
                            <Link to={""}>KSS Node Guide (Windows and Linux)</Link>
                            <p>|</p>
                            <Link to={""}>krosschain Desktop Wallet Guide</Link>
                        </div>
                        <div className="flex items-center w-3/12 flex-wrap text-2xl gap-[50px] justify-end">
                            <Link to={""}><img src={twitter}/></Link>
                            <Link to={""}><img src={facebook}/></Link>
                            <Link to={""}><img src={telegram}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home