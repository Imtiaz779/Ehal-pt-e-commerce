import React from "react";
import img1 from "@/assets/hero/hero1.jpg";
import img3 from "@/assets/Products/phone.jpg";
import img2 from "@/assets/Products/camera.jpg";
import img4 from "@/assets/Products/bag.jpg";

const Hero = () => {
  return (
    <div className="mt-16 lg:20 ">
      {/*  Hero Banner */}
      <div
        className="relative w-full h-[350px] lg:h-[550px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
          <p className="text-lg md:text-xl font-light">The Best</p>
          <h1 className="text-3xl md:text-5xl font-bold">Loffer Shoes</h1>
          <p className="text-lg md:text-xl mt-2">Minimum 30% Off</p>
          <button className="btn btn-success mt-4 transform transition duration-300 hover:scale-105">Shop Now</button>
        </div>
      </div>

      {/*  Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-4 md:px-12">
        {[
          { img: img3, color: "bg-purple-700", text: "Shop Now" },
          { img: img2, color: "bg-red-700", text: "Browse Products" },
          { img: img4, color: "bg-blue-700", text: "Discover Deals" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={item.img}
              alt="Sale"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gray-900/60 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-2xl font-semibold">Season Sale</h2>
              <p className="text-lg">Up to 70% Off</p>
              <button
                className={`mt-3 px-4 py-2 rounded-md text-white ${item.color} hover:brightness-120 transform transition duration-300  hover:scale-105 `}
              >
                {item.text}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
