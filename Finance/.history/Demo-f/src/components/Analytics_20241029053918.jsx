import React from "react";
import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="laptop" />
        <div>
          <p>Data Analytics DashBoard</p>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cum, vel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
