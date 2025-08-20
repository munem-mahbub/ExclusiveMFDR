import React from 'react'

const ColoredButton = ({children, className}) => {
  return (
    <>
    <button className={`text-white rounded-sm bg-[#DB4444] cursor-pointer ${className}`}>
            {children}
        </button>
    </>
  )
}

export default ColoredButton