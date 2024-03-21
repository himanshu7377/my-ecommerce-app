import React from 'react'
import Topheader from '../components/Topheader'
import Heading from '../components/Heading'
import Button from '../components/Button'

const Page = () => {
  return (
    <>
      <Topheader/>
    <div className='w-[576px] h-[453px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
        <Heading heading="Verify your email" className="font-semibold text-[32px] leading-[38.73px] text-[#000000] mx-auto mt-5"/>
        <p className="font-normal text-[16px] leading-[19.36px] text-[#000000] mx-auto w-[334px] h-[42px] text-center">
        Enter the 8 digit code you have received on <b>anu***@gmail.com</b>
        </p>
        <div className='w-[452px] h-[74px] flex flex-col gap-2 mt-5'>
            <label htmlFor='Code' className='ml-[18px] font-normal text-[16px] leading-[19.36px] text-[#000000]'>Code</label>
            <div className='flex gap-4 px-3 ml-[7px]'>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>
                <input type='text' className='border rounded-md border-[#C1C1C1] p-[10px] h-12 w-12'/>

            </div>
        </div>
        <Button type='button' className='border rounded-md border-[#C1C1C1] px-[148px] py-[18px] bg-[#000000] w-[500px] h-14 text-white mx-auto my-8' btnText="VERIFY"/>
    </div>
    </>
  )
}

export default Page
