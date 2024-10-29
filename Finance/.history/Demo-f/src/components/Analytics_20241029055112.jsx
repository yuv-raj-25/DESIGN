import React from "react";
import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-grey-5 py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4 rounded-3xl' src={laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-2xl">Data Analytics DashBoard</p>
          <h1 className='md:text-4xl sm:text-3xl text2xl py-2'>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt expedita corporis! Expedita impedit quisquam modi nisi earum nemo a, reprehenderit pariatur perspiciatis error nesciunt eligendi possimus? Ea, cum et.
          </p>
          <button className=' bg-black w-[200px] text-[#00df9a] rounded-xl font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
