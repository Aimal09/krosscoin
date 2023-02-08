import React from 'react'
import { Link } from 'react-router-dom'
import FullHeader from '../../components/Headers/FullHeader'
import Card from '../../components/Card/Card'

import krossicon from '../../assets/images/wallet-slider-image.png'
import api from '../../assets/images/api1.png'
import createtoken  from '../../assets/images/create-token1.png'
import decentralized from '../../assets/images/decentralized1.png'
import fees from '../../assets/images/fees1.png'
import gateways from '../../assets/images/gateways2.png'
import ledger from '../../assets/images/ledger1.png'

// eslint-disable-next-line no-unused-vars
import style from './style.css'

function Wallet() {
return (
        <>
            <FullHeader />
            <div className='bg-primary text-white bg-element home-page'>
                <div className='3xl:container py-4 3xl:mx-auto slider'>
                    <div className='flex flex-wrap items-center px-4'>
                        <div className='w-full md:w-6/12 content'>
                            <h1>Trade on the Kross Network Decentralised Exchange</h1>
                            <h3 className='my-5'>Buy and sell tokens quickly and securely with all advantages of a centralised exchange, but retaining complete control of your funds.</h3>
                            <button className='btn px-8 py-3 rounded-lg mt-10'>Get Started</button>
                        </div>
                        <div className='sm:w-full md:w-6/12 main-icon'>
                            <img src={krossicon} alt="" className='mx-auto' />
                        </div>
                    </div>
                </div>

                <div className="about py-5 bg-element-right">
                    <div className='3xl:container 3xl:mx-auto py-12 px-4 flex flex-wrap'>
                        <Card 
                        className="w-full md:w-4/12 p-5 flex"
                        cardicon={decentralized}
                        title="Decentralized"
                        description="Control of assets is yours alone – funds do not leave your wallet and cannot be frozen"  />
                        
                        <Card 
                        className="w-full md:w-4/12 p-5 flex"
                        cardicon={gateways}
                        title="Gateways to popular currencies"
                        description="Major cryptocurrencies supported: BTC, LTC, Waves, ETH, tUSD and others."/>
                        
                        <Card 
                        className="w-full md:w-4/12 p-5 flex"
                        cardicon={createtoken}
                        title="Fast token creation"
                        description="Token creation costs just 1000 TN and takes under 1 minute."/>
                        
                        <Card 
                        className="w-full md:w-4/12 p-5 flex"
                        cardicon={ledger}
                        title="Ledger support"
                        description="Use DEX with hardware wallets Ledger Nano S and Ledger Blue."/>
                        
                        <Card 
                        className="w-full md:w-4/12 p-5 flex"
                        cardicon={api}
                        title="Suitable for trading bots"
                        description="Get real-time access to market data and set up your trading bots via API."/>
                        
                        <Card 
                        className="w-full md:w-4/12 p-5 flex"
                        cardicon={fees}
                        title="Low, fixed fees"
                        description="0.04 TN per order filled."/>
                    </div>
                </div>

                <div className="market py-5">
                    <div className='3xl:container 3xl:mx-auto py-12 px-4 footer-content'>
                        <h2 className='text-3xl text-center'>Markets</h2>
                        <p className='w-8/12 mx-auto mt-7'>Kross Network Exchange allows you to execute trades swiftly and securely, regardless of whether you’re trading via mobile app, desktop client, web wallet or the Kross Network API.</p>

                        <div className="overflow-auto rounded-3xl">
                        <table className='table rounded-3xl w-full mt-10'>
                            <thead>
                                <tr>
                                    <th>Pair</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                    <th>24 High</th>
                                    <th>24 Low</th>
                                    <th>Volume</th>
                                    <th>Chart</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>KSS/BTC</td>
                                    <td>0.00000000 / $0</td>
                                    <td>0%</td>
                                    <td>0.00000000</td>
                                    <td>0.00000000</td>
                                    <td>0.000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>KSS/BTC</td>
                                    <td>0.00000000 / $0</td>
                                    <td>0%</td>
                                    <td>0.00000000</td>
                                    <td>0.00000000</td>
                                    <td>0.000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>KSS/BTC</td>
                                    <td>0.00000000 / $0</td>
                                    <td>0%</td>
                                    <td>0.00000000</td>
                                    <td>0.00000000</td>
                                    <td>0.000</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <button className='btn-secondary mx-auto block px-8 py-2 rounded-lg mt-10'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wallet;