import React from 'react'
import { Link } from 'react-router-dom'
import FullHeader from '../../components/Headers/FullHeader'
import Cardbox from '../../components/Card/Cardbox'

import ApexCharts from 'react-apexcharts'
// eslint-disable-next-line no-unused-vars
import style from './style.css'

function MyWallet() {
    return (
        <>
            <FullHeader />
            <div className='bg-primary text-white bg-element home-page'>
                <div className='3xl:container py-4 3xl:mx-auto slider'>
                    <div className='flex flex-wrap justify-between items-center px-4 my-10'>
                        <h1 className='text-2xl'>Wallet - <span className='text-2xl font-light'>Activity</span></h1>
                        <div>
                            <button className='btn rounded py-2 px-6'>+ Send</button>
                            <button className='bg-white text-secondary-100 ml-5 rounded py-2 px-6'>Recieve</button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row ">
                        <div className="w-full md:w-6/12">
                            <Cardbox>
                                <div className="flex gap-[20px]">
                                    <div className="p-3 w-6/12 bg-secondary">
                                        <h3 className='flex flex-wrap justify-between'><span className='username'>TN</span><sub className='bottom-0'><i className="fa fa-arrow-down bg-orange-400 p-2 mr-2 text-xs rounded"></i> 0%</sub></h3>
                                        <h1 className='mt-7'>$ 0.002400</h1>
                                    </div>
                                    <div className="p-3 w-6/12 border">
                                        <h3 className='flex flex-wrap justify-between'><span className='username'>TN</span><sub className='bottom-0'><i className="fa fa-arrow-up bg-green-400 text-white p-2 mr-2 text-xs rounded"></i> 0%</sub></h3>
                                        <h1 className='mt-7'>$ 0.002400</h1>
                                    </div>
                                </div>
                                <ApexCharts
                                    options={{
                                        chart: {
                                            id: "basic-bar"
                                        },
                                        xaxis: {
                                            categories: ['22JAN', '23JAN', '24JAN', '24JAN', '25JAN', '26JAN', '27JAN', '28JAN']
                                        }
                                    }}
                                    series={[
                                        {
                                            name: "series-1",
                                            data: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100],
                                            colors: "#000000"
                                        }
                                    ]}
                                    type="bar" />
                            </Cardbox>

                            <Cardbox>
                                <h3 className='flex flex-wrap justify-between'><span className='username'>TN</span></h3>
                                <div className="text-center">
                                    <h1 className='text-xl mt-7'>0.000000</h1>
                                    <div>
                                        <button className='py-2 px-4 border rounded text-secondary-100 mt-3'>+ Send</button>
                                    </div>

                                    <div>
                                        <button className='py-2 px-4 border rounded text-slate-500 mt-3'>+ Recieve</button>
                                    </div>
                                </div>
                            </Cardbox>
                        </div>

                        <div className='w-full md:w-6/12'>
                            <Cardbox>
                                <h3 className='flex flex-wrap justify-between'><span className='username'>Price TN</span></h3>
                                <div className="flex mt-7 mb-12">
                                    <h1 className='min-w-[40%] p-2 bg-slate-100 text-2xl'>$0.000000</h1>
                                </div>
                            </Cardbox>

                            <Cardbox>
                                <h3 className='flex flex-wrap justify-between'>SINCE LAST MONTH</h3>
                                <div className="flex mt-7 mb-12">
                                    <h1 className='min-w-[40%] p-2 bg-slate-100 text-2xl'>$0</h1>
                                </div>
                            </Cardbox>
                            
                            <Cardbox>
                                <h3 className='flex flex-wrap justify-between'>SINCE LAST MONTH</h3>
                                <div className="flex mt-7 mb-12">
                                    <h1 className='min-w-[40%] p-2 bg-slate-100 text-2xl'>$0</h1>
                                </div>
                            </Cardbox>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MyWallet;