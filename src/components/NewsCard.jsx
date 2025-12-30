import React from 'react'

const NewsCard = ( { image, description, date, extra } ) => {
  return (
    <div className='bg-black/60 px-5 py-5 rounded flex flex-col h-full'>
        <img src={image} alt={description} className="w-100 h-48 object-cover" />
        <p className="text-white mt-2 w-100">{description}</p>

        <div className='w-full flex justify-between mt-auto pt-4'>
          <span className="text-white">{date}</span>
          <span className='text-white'>{extra}</span>
        </div>
    </div>
  )
}

export default NewsCard