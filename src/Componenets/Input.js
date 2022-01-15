import React from 'react'

const Input = ({type, placeholder, value, handleinput, name}) => {
  return (
    <input 
    type={type} 
      placeholder={placeholder} 
      value={value}
      name={name}
      onChange={() => handleinput()}
      
      className="block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white" 
  
      required />
  )
}

export default Input
