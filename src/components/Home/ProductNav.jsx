import React from "react";


const ProductNav = () => {
  return (


    
    <div className="p-5 overflow-auto max-w-full">
      <div className=" flex flex-wrap  justify-center gap-8">
        <a className="p-2 mx-2 text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl hover:bg-pink-600 rounded-2xl transform transition duration-200 hover:text-yellow-300 hover:scale-105 whitespace-nowrap">
          Phones
        </a>
        <a className="p-2 mx-2 text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105 whitespace-nowrap">
          Laptops
        </a>
        <a className="p-2 mx-2 text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105 whitespace-nowrap">
          Watches
        </a>
        <a className="p-2 mx-2 text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105 whitespace-nowrap">
          Sunglasses
        </a>
        <a className="p-2 mx-2 text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105 whitespace-nowrap">
          Bags
        </a>
        <a className="p-2 mx-2 text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105 whitespace-nowrap">
          Shoes
        </a>
      </div>
    </div>
  );
};

export default ProductNav;
