import React from 'react'

function NewsLetter() {
  return (
    <div className='text-white w-full py-16 px-4'>
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
                <div className='flex flex-col sm:flex-'>
                    <input className='p-3 w-full rounded-xl text-black' type="Email" placeholder='Enter Email' />
                    <button className='  bg-black w-[200px] text-[#00df9a] rounded-xl font-medium ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter