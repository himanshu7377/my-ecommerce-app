import Link from 'next/link'
import React from 'react' 

const Topheader = () => {
  return (<>
    <div className=' h-[100px] bg-[#FFFFFF]'>
      <div className='flex gap-10 justify-end pr-12 mt-1'>
        <div className='text-sm'>Help</div>
        <div className='text-sm'>Orders & Returns</div>
        <div className='text-sm'>Hii, John</div>
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
        <div className='flex gap-10 '>
            <div >
                <img src="./search.png" alt="search" className='w-5 h-5'/>
            </div>
            <div >
                <img src='./cart.png' alt='cart' className='w-5 h-5'/>
            </div>
        </div>
      </div>
    </div>
    <div className='h-9 bg-gray-100 flex gap-4 justify-center items-center'>
      <img src="./leftArrow.png" alt="leftArrow" className='h-5'/>
      <p className='text-sm'>Get 10% off on business signup</p>
      <img src="./rightArrow.png" alt="rightArrow" className='h-5'/>
    </div>
  </>)
}

export default Topheader
