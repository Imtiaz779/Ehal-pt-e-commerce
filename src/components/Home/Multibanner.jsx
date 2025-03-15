import React from "react";
import img1 from "@/assets/hero/hero2.jpg";
import img2 from "@/assets/hero/hero3.jpg";
import img3 from "@/assets/hero/hero4.jpg";
import img4 from "@/assets/Products/leatherbag.avif";
import img5 from "@/assets/Products/phone.avif";

const MultiBanner = () => {
  return (
    <div className="m-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden  shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img1}
            alt="New Arrivals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Step Into Style - Explore Our Latest Collection!
            </h2>
            <button className="mt-3 px-4 py-2 rounded-md bg-cyan-600  hover:brightness-120 transform  duration-300  hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>
        {/* Second Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img2}
            alt="New Arrivals"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gray-900/60 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Find Your Perfect Pair - New Shoe Arrivals!
            </h2>
          </div>
        </div>
        {/* Third Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src={img3}
            alt="Season Sale"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-lg md:text-2xl font-bold">Season Sale</h2>
            <p className="text-sm md:text-lg">Up to 70% Off</p>
            <button className="mt-3 px-4 py-2 rounded-md bg-cyan-600  hover:brightness-120 transform  duration-300  hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>
        {/* Fourth Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img4}
            alt="Season Sale"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-2xl md:text-4xl font-bold">Season Sale</h2>
            <p className="text-sm md:text-lg">Up to 70% Off</p>
            <button className="mt-3 px-4 py-2 rounded-md bg-cyan-600 hover:brightness-120 transform  duration-300 hover:scale-105 transition">
              Browse Shoes
            </button>
          </div>
        </div>
        {/* Fifth Banner */}
        <div className="relative h-60 md:h-80 sm:col-span-2 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img
            src={img5}
            alt="New Arrivals"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center text-white text-center p-4">
            <h2 className="text-lg md:text-2xl font-semibold">Limited Offer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiBanner;
