import React from 'react'
import Topheader from '../components/Topheader'
import Heading from '../components/Heading'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

const MainContent = () => {
  return (
    <>
      <Topheader/>
        <div className='w-[576px] h-[658px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
            <Heading heading="Please mark your interests!" className="font-semibold text-[32px] leading-[38.73px] text-[#000000] mx-auto mt-5"/>
            <Heading heading="We will keep you notified." className="font-normal text-[16px] leading-[26px] text-[#000000] mx-auto mt-5"/>
            <Heading heading="My saved interests!" className="font-medium text-[20px] leading-[26px] text-[#000000] mt-5 text-left"/>
           
            <Checkbox label="Shoes"/>
            <Checkbox label="Men T-shirts"/>
            <Checkbox label="Makeup"/>
            <Checkbox label="Jewellery"/>
            <Checkbox label="Women T-shirts"/>
            <Checkbox label="Furniture"/>
            
            <nav className="flex justify-center items-center gap-x-1">
                <button
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 
                    disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}  strokeLinecap="round" strokeLinejoin="round"
                    >
                    <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
                <div className="flex items-center gap-x-1">
                    <Button type="button" btnText="1" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>

                    <Button type="button" btnText="2" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>

                    <Button type="button" btnText="3" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    <Button type="button" btnText="4" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    <Button type="button" btnText="5" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    <Button type="button" btnText="6" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-900  py-2 px-3 text-sm rounded-lg focus:outline-none "/>
                    
                   
                </div>
                <button type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 
                    disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    
                    <svg className="flex-shrink-0 size-3.5"  xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
            </nav>

        </div>
    </>
  )
}

export default MainContent
