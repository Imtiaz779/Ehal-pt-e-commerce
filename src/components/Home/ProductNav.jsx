import React from "react";


const ProductNav = () => {
  return (


    
    <div className="py-4 overflow-auto max-w-full">

      <div className="flex items-center justify-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl my-4">Shop By Category</h1>
        
      </div>
      <div className=" flex flex-wrap  justify-center gap-8">
        <a className="btn mt-4 transform transition duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white hover:shadow-lg">
          Phones
        </a>
        <a className="btn mt-4 transform transition duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white hover:shadow-lg">
          Laptops
        </a>
        <a className="btn mt-4 transform transition duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white hover:shadow-lg">
          Watches
        </a>
        <a className="btn mt-4 transform transition duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white hover:shadow-lg">
          Sunglasses
        </a>
        <a className="btn mt-4 transform transition duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white hover:shadow-lg">
          Bags
        </a>
        <a className="btn mt-4 transform transition duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white hover:shadow-lg">
          Shoes
        </a>
      </div>
    </div>
  );
};

export default ProductNav;
