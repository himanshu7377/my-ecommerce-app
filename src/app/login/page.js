"use client"
import React, { useState } from 'react'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Button from '../components/Button'
import Topheader from '../components/Topheader'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [userDetail,setUserDetail] = useState({
    email:"",
    password:""
  })
  const inputChange = (e)=>{
    let updated = {...userDetail};
    updated[e.target.name] = e.target.value;
    console.log(updated);
    setUserDetail(updated);
  }
  const handleLogin = async()=>{
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetail)
      });
      
      if (response.ok) {
        router.push('/protectedPage');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }
  return (<>
  <Topheader/>
    <form className='w-[576px] h-[614px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
      <Heading heading="Login" className="font-semibold text-[32px] leading-[38.73px] text-[#000000] mx-auto mt-5"/>
      <Heading heading="Welcome back to ECOMMERCE" className="font-medium text-[24px] leading-[29.05px] text-[#000000] mx-auto mt-5"/>
      <Heading heading="The next gen business marketplace" className="font-normal text-[16px] leading-[19.36px] text-[#000000] mx-auto"/>
      <Input name="email" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="email" placeholder="Enter" labelText="Email"/>
      <Input name="password" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="password" placeholder="Enter" labelText="Password"/>
      <p className="absolute top-[516px] left-[892px] cursor-pointer font-normal text-[16px] leading-[19.36px] text-[#000000] mx-auto">Show</p>
      
      <Button type='button' onClick={handleLogin} className='border rounded-md border-[#C1C1C1] px-[148px] py-[18px] bg-[#000000] w-[500px] h-14 text-white mx-auto my-8' btnText="CREATE ACCOUNT"/>
      <p className='text-sm mx-auto my-2'>Don't have an Account? 
      <Link href={'/'}>
      <span className='text-[#000000] cursor-pointer'>SIGN UP</span>
      </Link></p>
    </form>
    </>
  )
}

export default Login
