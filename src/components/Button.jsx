import React from 'react'

const Button = ({buttonName}) => {
  return (
    <div>
        <button className='border px-3 py-1 w-40 rounded bg-[#393b40] text-[#f4d8a8] tracking-tighter cursor-pointer'>{buttonName}</button>
    </div>
  )
}

export default Button