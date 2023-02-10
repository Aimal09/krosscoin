import React, { useState } from 'react'
import FullHeader from '../../components/Headers/FullHeader'
import Container from '../../components/Layout/Conatiner'
import NoUnconfirmedTransaction from './components/NoUnconfirmedTransaction'

import './styles.css'

function LatestBlocks() {
  // eslint-disable-next-line no-unused-vars
  const [isTransactionConfirmed, setIsTransactionConfirmed] = useState(true)

  return (
    <>
      <FullHeader />
      <div className="polygon-bg min-h-screen pt-[33px] pb-[38px] lg:pt-[92px] bg-primary">
        <Container>
          <div className='mx-auto w-[95%] md:w-10/12 xl:w-[1040px]'>
            <form onSubmit={e => e.preventDefault()} className="relative w-full h-[44px] xl:h-[50px]">
              <input type="search" className="mx-auto bg-[#cecfcf4d] block text-white caret-white rounded-[15px] h-full w-full placeholder-gray-300 pl-[40px] focus:outline-none focus:border focus:border-secondary-100" placeholder='Search Address, Transaction ID, Block ID, Alias, Lease ID...' required />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute z-10 text-white cursor-pointer top-3 left-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </form>
            <div className="text-white flex items-center justify-between flex-col gap-[25px] mt-[20px] w-full md:gap-[30px] md:flex-row lg:gap-[100px] xl:mt-[40px]">
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p>Version:</p>
                  <p className="font-semibold">KSS v1.3.16</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p>Current height:</p>
                  <p className="font-semibold">37374562</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p>Base target:</p>
                  <p className="font-semibold">102</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p>Average block delay:</p>
                  <p className="font-semibold">50.213s</p>
                </div>
              </div>
            </div>
            <div className="text-white mt-[51px] xl:mt-[100px]">
              <div className="flex items-center justify-between">
                <h1>Latest blocks</h1>
                <button className='block-btn p-2 font-semibold text-sm md:text-base'>View All Blocks</button>
              </div>
              <div className='flex w-full flex-col gap-[16px] mt-[24px] xl:gap-[20px] xl:mt-[40px]'>
                {
                  [0, 0, 0, 0, 0].map((_, id) => (
                    <div key={id} className="h-[108px] bg-secondary rounded-[20px] flex flex-col items-center justify-evenly overflow-hidden px-[12px] md:flex-row md:justify-between lg:px-[57px]">
                      <div className="flex flex-col gap-2">
                        <span>Block <span className='underline'>2522218</span> contains 25 transactions</span>
                        <span>ID: ChPoypGYQ4qKJtvuxEhvuBhHnxQBByXJegtJi3hGF5vR</span>
                      </div>
                      <div className="flex w-full justify-between md:w-auto md:flex-col">
                        <span>21:12:28</span>
                        <span>25.01.2023</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="text-white mt-[60px] xl:mt-[100px]">
              {
                isTransactionConfirmed ?
                  <div className="mx-auto w-fit flex items-center flex-col">
                    <NoUnconfirmedTransaction />
                  </div>
                  :
                  <>
                    <h1>Unconfirmed transactions (1)</h1>
                    <div className='flex w-full flex-col gap-[16px] mt-[24px] xl:gap-[20px] xl:mt-[40px]'>
                      <div className="h-[161px] bg-secondary rounded-[20px] flex flex-col items-center justify-evenly px-[12px] lg:px-[57px]">
                        <div className="flex w-full flex-col items-center justify-evenly overflow-hidden md:flex-row md:justify-between">
                          <div className="flex flex-col gap-2">
                            <span>ChPoypGYQ4qKJtvuxEhvuBhHnxQBByXJegtJi3hGF5vR</span>
                            <span className='capitalize'>fee: 0.15 KSS</span>
                          </div>
                          <div className="mt-2 flex w-full justify-between md:hidden">
                            <span className='underline'>Sender</span>
                            <span>Type 16</span>
                          </div>
                          <div className="hidden w-full mt-2 justify-between md:w-auto md:flex md:flex-col">
                            <span>21:12:28</span>
                            <span>25.01.2023</span>
                          </div>
                        </div>
                        <div className="hidden w-full justify-between md:flex">
                          <span className='underline'>Sender</span>
                          <span>Type 16</span>
                        </div>
                        <div className="flex w-full mt-2 justify-between md:hidden">
                          <span>21:12:28</span>
                          <span>25.01.2023</span>
                        </div>
                      </div>
                    </div>
                  </>
              }
            </div>
          </div>
        </Container>

      </div>
    </>
  )
}

export default LatestBlocks