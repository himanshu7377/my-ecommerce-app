import React from 'react'

const Button = ({btnText,className,type,onClick}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{btnText}</button>

  )
}

export default Button
