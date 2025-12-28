import React from 'react'

const City = ({ image, name }) => {
  return (
    <div className='relative w-full h-[35vh] overflow-hidden'>
      <img src={image} alt={name} className="w-full h-full object-cover" />
      
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-white text-4xl font-(--font-ui) tracking-tight drop-shadow-lg'>{name}</span>
      </div>
    </div>
  )
}

export default City