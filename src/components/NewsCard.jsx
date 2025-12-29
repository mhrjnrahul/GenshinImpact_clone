import React from 'react'

const NewsCard = ( { image, description } ) => {
  return (
    <div className='bg-black px-5 py-5 rounded-xl'>
        <img src={image} alt={description} className="w-100 h-36 object-cover" />
        <p className="text-white mt-2 w-70">{description}</p>
    </div>
  )
}

export default NewsCard