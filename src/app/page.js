"use client"
import React, { useState } from 'react'
import TopBar from './components/TopBar'
import Button from './components/Button';
import Input from './components/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
  name:"",
    email: "",
    password: ""
  });

  const inputChange = (e) => {
    let updated = { ...userDetail };
    updated[e.target.name] = e.target.value;
    setUserDetail(updated);
  }

  const handleSubmit = async () => {
    // Reset previous errors
    setErrors({ name : "",email: "", password: "" });

    // Validate email and password
    if (!userDetail.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      return;
    }
    if (!userDetail.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
      return;
    }
    if (!userDetail.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required" }));
      return;
    }

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

    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
    setUserDetail({ ...userDetail, name: "", email: "", password: "" });
    router.push('/verifyEmail');
  }

  return (
    <>
      <TopBar />
      <form className='w-[576px] h-[691px] border border-[#C1C1C1] border-solid rounded-[20px] mx-auto my-8 flex flex-col gap-4 p-5'>
        <h1 className="font-semibold text-[32px] leading-[38.73px] text-[#000000] mx-auto mt-5">Create your account</h1>
        <Input
          name="name"
          onChangeHandler={inputChange}
          className={`border rounded-md border-[#C1C1C1] p-[10px] ${errors.name && 'border-red-500'}`}
          type="text"
          placeholder="Enter"
          labelText="Name"
        />
         {errors.name && <p className="text-red-500 text-sm ml-10 ">{errors.name}</p>}
        <Input
          name="email"
          onChangeHandler={inputChange}
          className={`border rounded-md border-[#C1C1C1] p-[10px] ${errors.email && 'border-red-500'}`}
          type="email"
          placeholder="Enter"
          labelText="Email"
        />
        {errors.email && <p className="text-red-500 text-sm ml-10 ">{errors.email}</p>}
        <Input
          name="password"
          onChangeHandler={inputChange}
          className={`border rounded-md border-[#C1C1C1] p-[10px]  ${errors.password && 'border-red-500'}`}
          type="password"
          placeholder="Enter"
          labelText="Password"
        />
        {errors.password && <p className="text-red-500 text-sm ml-10">{errors.password}</p>}
        <Button
          type='button'
          onClick={handleSubmit}
          className='border rounded-md border-[#C1C1C1] px-[148px] py-[18px] bg-[#000000] w-[500px] h-14 text-white mx-auto my-8'
          btnText="CREATE ACCOUNT"
        />
        <p className='text-sm mx-auto my-2'>Have an account?
          <Link href={'/login'}>
            <span className='text-[#000000] cursor-pointer text-xl ml-1'> LOGIN</span>
          </Link>
        </p>
      </form>
    </>
  )
}

export default Home
