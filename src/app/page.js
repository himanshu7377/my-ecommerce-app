"use client"
import React, { useState } from 'react'
import Topheader from './components/Topheader'
// import prisma from './lib/prisma'
import Heading from './components/Heading';
import Button from './components/Button';
import Input from './components/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// async function getUserData(){
//   const userdetail = await prisma.User.findMany();
//   return userdetail;
// }
const Home = () => {
  const router = useRouter();
  const [userDetail,setUserDetail] = useState({
    name:"",
    email:"",
    password:""
  })
  const inputChange = (e)=>{
    let updated = {...userDetail};
    updated[e.target.name] = e.target.value;
    // console.log(updated);
    setUserDetail(updated);
  }
  // const data = await getUserData();
  // console.log(data);

  const handleSubmit = async()=>{
  
    // try{
    //   await fetch('/api/register',{
    //     method:"POST",
    //     headers:{
    //       "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify(
    //       {name:userDetail.name,
    //         email:userDetail.email,
    //         password:userDetail.password
    //       })
    //   });

    // }
    // catch(error)
    // {
    //   console.error();
    // }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetail)
      });
      
      if (response.ok) {
        router.push("/login");
      }
      
      const data = await response.json();
      console.log(data);
      // return data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
    setUserDetail({...userDetail,name:"",email:"",password:""});
  }
  return (
    <>
      <Topheader/>
      <form className='w-[576px] h-[691px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
        <Heading heading="Create your account" className="font-semibold text-[32px] leading-[38.73px] text-[#000000] mx-auto mt-5"/>
        <Input name="name" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="text" placeholder="Enter" labelText="Name"/>
        <Input name="email" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="email" placeholder="Enter" labelText="Email"/>
        <Input name="password" onChangeHandler={inputChange} className='border rounded-md border-[#C1C1C1] p-[10px]' type="password" placeholder="Enter" labelText="Password"/>
        <Button type='button' onClick={handleSubmit} className='border rounded-md border-[#C1C1C1] px-[148px] py-[18px] bg-[#000000] w-[500px] h-14 text-white mx-auto my-8' btnText="CREATE ACCOUNT"/>
        <p className='text-sm mx-auto my-2'>Have an account? 
        <Link href={'/login'}>
        <span className='text-[#000000] cursor-pointer'>LOGIN</span>
        </Link></p>
    </form>
    </>
  )
}

export default Home
