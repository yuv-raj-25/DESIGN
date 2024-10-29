import React from 'react'
import { ReactTyped} from "react-typed";

function Hero() {
  return (
    <div className='text-white '>
        <div className=' max-w-[ 800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center'>
            <p className='text-[#00df9a] font-bold p-2 text-3xl'>
                GROWING DATA WITH ANALYTICS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>
                Grow With Data
            </h1>
            <div className='flex  justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3 '>
                    fast , Flexible Financing For
                </p>
                <ReactTyped  className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                strings={['BTB' , 'BTC' , 'SAAS']} typeSpeed={200} backSpeed={150} loop />
            </div>
            <p className=' md:text-2xl sm:text-xl font-bold text-gray-500'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quam?
            </p>
            <button className='w-[200px] bg-[#00df9a] rounded-xl font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero