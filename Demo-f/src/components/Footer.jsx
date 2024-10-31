import React from 'react'
import {
 
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagram

} from 'react-icons/fa'

function Footer() {
  return (
   <div className=' max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' >
    <div>
    <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Finance
      </h1>
      <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid dolorem ipsum, fuga sit voluptatem?</p>
     <div className='flex justify-between my-6 md:w-[75%]'>
     <FaDribbbleSquare size={30} />
      <FaFacebookSquare size={30} />
      <FaInstagram size={30} />
      <FaGithubSquare size={30} />
      <FaTwitterSquare size={30} />
     </div>
    </div>

    <div className='lg:col-span-2 flex justify-between'>
        <div>
            <h6 className='font-medium  text-gray-500 text-4xl'>Company </h6>
            <ul>
                <li className='py-2 text-sm '>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>About US</li>
                <li className='py-2 text-sm'>Contact US</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium  text-gray-500 text-4xl'>Support  </h6>
            <ul>
            <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium  text-gray-500 text-4xl'>Solutions </h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>About US</li>
                <li className='py-2text-sm'>Contact US</li>
            </ul>
        </div>
    </div>

   </div>
  )
}

export default Footer