import React from "react";

const ProductNav = () => {
  return (
    <div className="py-2">
      <div className=" flex justify-center space-x-6 sm:space-x-4 md:space-x-8 lg:space-x-12">
        <a className="px-3 py-2 text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl hover:bg-pink-600 rounded-2xl transform transition duration-200 hover:text-yellow-300 hover:scale-105">
          Phones
        </a>
        <a className="tab tab-lg text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105">
          Laptops
        </a>
        <a className="tab tab-lg text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105">
          Watches
        </a>
        <a className="tab tab-lg text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105">
          Sunglasses
        </a>
        <a className="tab tab-lg text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl  hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105">
          Bags
        </a>
        <a className="tab tab-lg text-gray-900 font-semibold text-lg sm:text-md md:text-xl lg:text-2xl hover:bg-pink-600 rounded-2xl transition duration-200 hover:text-yellow-300  hover:scale-105">
          Shoes
        </a>
      </div>
    </div>
  );
};

export default ProductNav;
