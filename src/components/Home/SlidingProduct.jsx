import React from "react";
import img1 from "@/assets/Products/jacket.jpg";
import img2 from "@/assets/Products/sunglass.webp";
import img3 from "@/assets/Products/bag.jpg";
import img4 from "@/assets/Products/phone.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SlidingProduct = () => {
  const products = [
    {
      id: 1,
      name: "Jacket",
      image: img1,
      price: 129.99,
      description:
        "High-quality wireless headphones with noise-canceling features.",
    },
    {
      id: 2,
      name: "Sunglass",
      image: img2,
      price: 199.99,
      description:
        "A stylish smartwatch with fitness tracking and heart rate monitoring.",
    },
    {
      id: 3,
      name: "Bag",
      image: img3,
      price: 89.99,
      description:
        "Portable Bluetooth speaker with great sound quality and long battery life.",
    },
    {
      id: 4,
      name: "Phone",
      image: img4,
      price: 29.99,
      description:
        "Durable laptop sleeve to keep your device safe while on the go.",
    },
  ];

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      pagination={{ clickable: true }}
      className="w-full"
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide>
          <div
            key={product.id}
            className=" bg-white border border-gray-300 rounded-xl shadow-cyan-900 transform transition duration-200 ease-in-out  hover:shadow-xl hover:scale-105 mb-10 "
          >
            <figure className="w-full ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain rounded-t-xl "
              />
            </figure>
            <div className="card-body text-center p-4 ">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {product.description}
              </p>
              <span className="text-xl font-bold text-blue-600 hover:scale-125">
                ${product.price}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlidingProduct;
