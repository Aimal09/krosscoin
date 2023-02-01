import React from 'react'
import { Link } from 'react-router-dom'
import FullHeader from '../../components/Headers/FullHeader'

function Products() {
  return (
    <>
      <FullHeader />
      <div className='polygon-bg min-h-screen pt-[92px] bg-primary'>
        <div className="mx-auto w-[960px]">
          <div className="text-white flex flex-col gap-1">
            <span className='font-semibold'>Products/ <span className="font-normal text-white/70">Services</span></span>
            <span className='text-4xl font-semibold'>Products</span>
          </div>
          <div className="mt-[40px] py-[50px] px-[70px] rounded-[25px] bg-secondary/30">
            <p className="uppercase text-secondary-100">Kross network</p>
            <p className="text-white mt-[20px] block">
              Blockchain Network <br />
              Open, Trusted, Secure, Distributed Blockchain Network for Everyone.
            </p>
            <ul className='mt-[20px] pl-[20px] list-disc text-white'>
              <li className='text-[24px] pb-[.1px] border-b border-b-white w-fit'><Link to={""}>Datasheet</Link></li>
              <li className='text-[24px] pb-[.1px] border-b border-b-white w-fit'><Link to={""}>Wallet</Link></li>
              <li className='text-[24px] pb-[.1px] border-b border-b-white w-fit'><Link to={""}>Explorer</Link></li>
              <li className='text-[24px] pb-[.1px] border-b border-b-white w-fit'><Link to={""}>Stats</Link></li>
              <li className='text-[24px] pb-[.1px] border-b border-b-white w-fit'><Link to={""}>Api Docs</Link></li>
            </ul>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="uppercase text-secondary-100">Hashgreed</p>
              <ul className='mt-[20px] pl-[20px] list-disc text-white'>
                <li className='text-[24px] pb-[.1px] border-b border-b-white w-fit'><Link to={""}>Hashgreed</Link></li>
              </ul>
            </div>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="uppercase text-secondary-100">Exchange</p>
              <p className="text-white mt-[20px] block">
                Decentralized Exchange <br />
                Kross Decentralized Exchange or aka Kross DEX is an exchange accessible from the wallet, allowing every token created on Turtle Network or accessible via Gateways to trade in a decentralized manner.
              </p>
            </div>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="uppercase text-secondary-100">KROSS NETWORK COIN ($KSS)</p>
              <p className="text-white mt-[20px] block">
                KrossNetwork ($KSS) coin <br />
                KrossNetwork ($KSS) as the underlying asset on the kross Network and Kross DEX. Network fees & Node earnings paid in $KSS.
              </p>
            </div>
            <div className="mt-[20px] pt-[20px] border-t border-customGray">
              <p className="uppercase text-secondary-100">GATEWAYS</p>
              <p className="text-white mt-[20px] block">
                Doorway to the Kross Network <br />
                The Kross Network utilizes Gateways for external tokens/coins to transfer to and from the network, in a seamless manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products