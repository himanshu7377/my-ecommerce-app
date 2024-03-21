"use client"
import React from 'react'

const Input = ({labelText,type,className, placeholder, name, onChangeHandler}) => {
  return (
    <div className='h-[74px] w-[456] flex flex-col p-5'>
      <label htmlFor='name'>{labelText}</label>
      <input type={type} className={className} placeholder={placeholder} name={name} onChange={onChangeHandler}/>
    </div>
  )
}

export default Input
