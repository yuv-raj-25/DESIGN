import React from 'react'
import laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={laptop} alt="la" />
        </div>
    </div>
  )
}

export default Analytics