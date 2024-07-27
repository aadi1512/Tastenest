import React from "react";
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Footer from "../Components/Footer";
import { BsMeta } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <>
      <div className="relative w-full h-[60vh]">
        <img
          src={MainHand}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-bold text-6xl leading-snug max-w-8xl text-white">
            Food Delight
          </h1>
          <p className="text-[18px] mx-auto max-w-md text-blue-200 mt-4">
            Satisfy Your Cravings
          </p>
          <p className="mt-2 text-bold text-white">Order Now</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center h-auto w-full md:w-full px-10 md:px-20 py-20 space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col space-y-5">
          <h1 className="text-base font-semibold text-gray-800">FOLLOW US</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Stay Connected</h1>
          <p className="text-lg leading-7 text-gray-700">
            Stay updated with our latest offers and new dishes. Follow us on social media for more delicious updates.
          </p>
          <div className="flex justify-start gap-5 mt-10">
            <FaSquareXTwitter size={40} className="text-blue-500 hover:text-blue-700" />
            <ImYoutube size={40} className="text-red-500 hover:text-red-700" />
            <BsMeta size={40} className="text-blue-600 hover:text-blue-800" />
          </div>
        </div>
        <form className="w-full md:w-1/2 bg-white rounded-lg px-8 pt-6 pb-8 shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">
              Your Name (required)
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="email">
              Your Email (required)
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline"
              type="button"
            >
              SEND
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;