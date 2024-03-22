import Link from 'next/link'
import React from 'react' 

import Image from 'next/image';

const Topheader = () => {
  return (<>
    <div className=' h-[100px] bg-[#FFFFFF]'>
      <div className='flex gap-6 justify-end pr-12 pt-5'>
        <div className='text-sm'>Help</div>
        <div className='text-sm'>Orders & Returns</div>
        <div className='text-sm'>Hi, John</div>
      </div>
      <div className='flex justify-normal items-center gap-[21%] p-4'>
        <Link href={'/'}>
        <h1 className='text-2xl font-bold'>ECOMMERCE</h1>
        </Link>
        <div className='flex gap-10 items-center justify-center'>
            <div className='font-bold'>Categories</div>
            <div className='font-bold'>Sale</div>
            <div className='font-bold'>Clearance</div>
            <div className='font-bold'>New stock</div>
            <div className='font-bold'>Trending</div>
        </div>
        <div className='display float-end flex space-x-6 ml-20  '>
                    {/* Search icon */}
                    <Image src="/search.svg" alt="Search" width={30} height={40} />

                    {/* Cart icon */}
                    <Image src="/cart.svg" alt="cart" width={30} height={40} />
                </div>
      </div>
    </div>
    <div className="flex justify-center items-center w-1440 h-12 gap-0 bg-gray-400">
            <p className="text-black">&lt; &nbsp; &nbsp; Get 10% off on business sign up  &nbsp; &nbsp; &gt;</p>
        </div>
  </>)
}

export default Topheader
