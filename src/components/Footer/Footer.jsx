import React from "react";
import Logo from "@/assets/logo/birdlogo.webp";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3  gap-10">
        {/* Logo */}
        <div className="text-center ">
          <img src={Logo} alt="Ehal.pt Logo" className="w-24 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Customer Service */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-3">
            <li>
              Big Deal Store Demo,<br />Chittagong, Bangladesh -
              <span className="text-blue-300">12345</span>
            </li>
            <li>
              Call Us: <span className="text-blue-300">123-456-7898</span>
            </li>
            <li>
              Email Us:{" "}
              <span className="text-blue-300">support@bigdeal.com</span>
            </li>
            <li>
              Fax: <span className="text-blue-300">123456</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href="#"
              className="text-blue-800 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-pink-800 hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-800 hover:text-blue-500 transition duration-300"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="#"
              className="text-red-800 hover:text-red-500 transition duration-300"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          &copy;{new Date().getFullYear()}
          <span className="text-red-500">Ehal.pt</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
