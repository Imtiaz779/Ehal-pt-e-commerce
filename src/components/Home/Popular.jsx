import React from "react";
import img1 from "@/assets/hero/01.jfif";
import img2 from "@/assets/hero/02.webp";
import img3 from "@/assets/hero/03.jfif";
import img4 from "@/assets/hero/04.jpg";
import img5 from "@/assets/hero/33.jpg";
import img6 from "@/assets/hero/06.webp";
import img7 from "@/assets/hero/07.webp";
import img8 from "@/assets/hero/08.webp";
import img9 from "@/assets/hero/bluetoothspeaker.webp";
import img10 from "@/assets/hero/backpack.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Popular = () => {
  let new_collections = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "mobile",
      image: img1,
      new_price: 1299.99,
      old_price: 1399.99,
    },
    {
      id: 2,
      name: "Nike Air Max 2025",
      category: "shoes",
      image: img2,
      new_price: 220.0,
      old_price: 250.0,
    },
    {
      id: 3,
      name: "Leather Weekender Bag",
      category: "bags",
      image: img3,
      new_price: 350.0,
      old_price: 400.0,
    },
    {
      id: 4,
      name: "Ray-Ban  Sunglasses",
      category: "sunglasses",
      image: img4,
      new_price: 180.0,
      old_price: 220.0,
    },
    {
      id: 5,
      name: "Denim Bomber Jacket",
      category: "jackets",
      image: img5,
      new_price: 150.0,
      old_price: 200.0,
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      category: "special",
      image: img6,
      new_price: 399.99,
      old_price: 499.99,
    },
    {
      id: 7,
      name: "Gucci Leather Wallet",
      category: "accessories",
      image: img7,
      new_price: 180.0,
      old_price: 250.0,
    },
    {
      id: 8,
      name: "Bose Earbuds",
      category: "audio",
      image: img8,
      new_price: 280.0,
      old_price: 350.0,
    },
    {
      id: 9,
      name: "Sono Bluetooth Speaker",
      category: "audio",
      image: img9,
      new_price: 399.99,
      old_price: 450.0,
    },
    {
      id: 10,
      name: "North Face Backpack",
      category: "bags",
      image: img10,
      new_price: 80.0,
      old_price: 120.0,
    },
    {
      id: 11,
      name: "Montblanc Leather Wallet",
      category: "accessories",
      image: img7,
      new_price: 250.0,
      old_price: 300.0,
    },
    {
      id: 12,
      name: "Sony Earbuds",
      category: "audio",
      image: img8,
      new_price: 230.0,
      old_price: 300.0,
    },
  ];

  return (
    <div className="m-4 overflow-hidden py-2">
      <h2 className=" text-center font-bold text-3xl md:text-4xl lg:text-5xl my-4">
        Popular Product
      </h2>
      <p className="text-center font-semibold tracking-tighter mb-5 text-gray-900 max-w-2xl mx-auto mt-2 text-lg">
        Discover the popular and get the best deals on top-quality products.
      </p>
      <div className={` `}>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          loop={true}
          
        
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            384: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {new_collections.map((product) => (
            <SwiperSlide
              key={product.id}
              className="border border-gray-300 rounded-lg overflow-hidden  hover:shadow-2xl shadow-gray-200 transform transition duration-300 hover:scale-105 "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-contain transform transition duration-300 hover:scale-105"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500 capitalize">{product.category}</p>
                <div className="mt-2 mb-5">
                  <span className="text-lg font-bold text-red-600">
                    ${product.new_price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${product.old_price.toFixed(2)}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
