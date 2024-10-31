import React from "react";

function Card() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white  ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
        <h2 className="text-2xl font-bold text-center py-8 ">Single User</h2>
        <p className="text-center text-4xl font-bold">$129</p>
        <div className="text-center font-medium">
            <p className="py-2 border-b  mx-8 mt-8">500 GB Storage </p>
            <p className="py-2 border-b  mx-8">500 GB Storage </p>
            <p className="py-2 border-b  mx-8 ">500 GB Storage </p>
        </div>
        <button className="  bg-black w-[200px] text-[#00df9a] rounded-xl font-medium my-6 mx-auto py-3 ">Strat Trail</button>
        </div>

      <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
        <h2 className="text-2xl font-bold text-center py-8 ">Double User</h2>
        <p className="text-center text-4xl font-bold">$129</p>
        <div className="text-center font-medium">
            <p className="py-2 border-b  mx-8 mt-8">500 GB Storage </p>
            <p className="py-2 border-b  mx-8">500 GB Storage </p>
            <p className="py-2 border-b  mx-8 ">500 GB Storage </p>
        </div>
        <button className="  bg-black w-[200px] text-[#00df9a] rounded-xl font-medium my-6 mx-auto py-3 ">Strat Trail</button>
        </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
        <h2 className="text-2xl font-bold text-center py-8 ">Triple User</h2>
        <p className="text-center text-4xl font-bold">$129</p>
        <div className="text-center font-medium">
            <p className="py-2 border-b  mx-8 mt-8">500 GB Storage </p>
            <p className="py-2 border-b  mx-8">500 GB Storage </p>
            <p className="py-2 border-b  mx-8 ">500 GB Storage </p>
        </div>
        <button className="  bg-black w-[200px] text-[#00df9a] rounded-xl font-medium my-6 mx-auto py-3 ">Strat Trail</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
