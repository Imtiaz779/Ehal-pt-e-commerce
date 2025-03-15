import React from "react";
import img1 from "@/assets/Products/phone.jpg";
import img2 from "@/assets/Products/shoe.webp";
import img3 from "@/assets/Products/bag.webp";
import img4 from "@/assets/Products/sunglass.webp";
import img5 from "@/assets/Products/jacket.jpg";
import img6 from "@/assets/Products/watch.jfif";

const NewCollection = () => {
  let new_collections = [
    {
      id: 1,
      name: "Samsung Galaxy Z",
      category: "mobile",
      image: img1,
      new_price: 1799.99,
      old_price: 1899.99,
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "shoes",
      image: img2,
      new_price: 180.0,
      old_price: 220.0,
    },
    {
      id: 3,
      name: "Travel Tote Bag",
      category: "bags",
      image: img3,
      new_price: 250.0,
      old_price: 300.0,
    },
    {
      id: 4,
      name: "Aviator Sunglasses",
      category: "sunglasses",
      image: img4,
      new_price: 150.0,
      old_price: 180.0,
    },
    {
      id: 5,
      name: "Men's Trucker Jacket",
      category: "jackets",
      image: img5,
      new_price: 120.0,
      old_price: 150.0,
    },
    {
      id: 6,
      name: "Watch",
      category: "special",
      image: img6,
      new_price: 299.99,
      old_price: 399.99,
    },
  ];

  return (
    <div className="m-4 overflow-hidden">
      <h2 className="text-4xl text-center font-bold">New Collection</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
        Discover the latest arrivals and get the best deals on top-quality
        products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 ">
        {new_collections.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg overflow-hidden  hover:shadow-2xl shadow-gray-200 transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain transform transition duration-300 hover:scale-105"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 capitalize">{product.category}</p>
              <div className="mt-2">
                <span className="text-lg font-bold text-red-600">
                  ${product.new_price.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  ${product.old_price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
