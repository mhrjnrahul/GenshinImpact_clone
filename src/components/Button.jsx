import React from 'react'

const Button = ({buttonName}) => {
  return (
    <div className='my-3'>
        <button className='border px-3 py-1 w-40 rounded bg-[#e4cdcd00] hover:bg-[#393b40] hover:text-[#f4d8a8] tracking-tighter cursor-pointer'>{buttonName}</button>
    </div>
  )
}

export default Button