import React from 'react'

function NewsLetter() {
  return (
    <div className='text-white w-full py-16'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className=' md:text4xl sm:text3xl text-2xl font-bold py-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis!
                </p>
            </div>
            <div>
                <div>
                    <input type="Email" placeholder='Enter Email' />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter