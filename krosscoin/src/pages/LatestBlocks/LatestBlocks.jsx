import React from 'react'
import FullHeader from '../../components/Headers/FullHeader'

function LatestBlocks() {
  return (
    <>
      <FullHeader />
      <div className="polygon-bg min-h-screen pt-[33px] pb-[38px] lg:pt-[92px] bg-primary">
        <form onSubmit={e => e.preventDefault()} className="relative mx-auto w-[98%] h-[44px] md:w-10/12 xl:h-[50px] xl:w-[1040px">
          <input type="search" className="mx-auto bg-[#cecfcf4d] block text-white caret-white rounded-[15px] h-full w-full placeholder-gray-300 pl-[40px] focus:outline-none focus:border focus:border-secondary-100" placeholder='Search Address, Transaction ID, Block ID, Alias, Lease ID...' required />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute z-10 text-white cursor-pointer top-3 left-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </form>
      </div>
    </>
  )
}

export default LatestBlocks