'use client'
import React, { useState } from 'react'
import Input from './Input'
import Heading from './Heading'
import Button from './Button'
import Link from 'next/link'

const Card = () => {
  const [userDetail,setUserDetail] = useState({
    name:"",
    email:"",
    password:""
  })
  const inputChange = (e)=>{
    let updated = {...userDetail};
    updated[e.target.name] = e.target.value;
    console.log(updated);
    setUserDetail(updated);
  }
 

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try{
      fetch('/api/register-user',{
        method:"POST",
        headers:{
          "Content-Type":"applicatiuon/json"
        },
        body:JSON.stringify({name,email,password})
      })
    }
    catch(error)
    {
      console.error();
    }
    setName("");
    setEmail("");
    setPasword("");
  }
  return (
    <form onSubmit={handleSubmit} className='w-[576px] h-[691px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
    <Heading heading="Create your account" className="font-semibold text-[32px] leading-[38.73px] text-[#000000] mx-auto mt-5"/>
    <Input name="name" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="text" placeholder="Enter" labelText="Name"/>
    <Input name="email" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="email" placeholder="Enter" labelText="Email"/>
    <Input name="password" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="password" placeholder="Enter" labelText="Password"/>
    <Button type='button' className='border rounded-md border-[#C1C1C1] px-[148px] py-[18px] bg-[#000000] w-[500px] h-14 text-white mx-auto my-8' btnText="CREATE ACCOUNT"/>
    <p className='text-sm mx-auto my-2'>Have an account? 
    <Link href={'/login'}>
    <span className='text-[#000000] cursor-pointer'>LOGIN</span>
    </Link></p>
    </form>
  )
}

export default Card
