import React, { useState } from 'react';
import Footer from './Footer';
import foodBackground from '../assets/About images/pexels-dana-tentis-118658-750073.jpg';
import chef from '../assets/About images/pexels-reneterp-2977515.jpg';
import ingredients from '../assets/About images/pexels-angele-j-35172-128402 (3).jpg';
import delivery from '../assets/About images/pexels-gustavo-fring-4254142.jpg';

const Landing = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (

    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/" className="text-2xl font-bold text-green-600">TASTENEST</a>
          <div>
          <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="text-gray-600 hover:text-green-600 focus:outline-none mx-4"
              >
                Categories
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                  >
                    Pizza
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                  >
                    Burger
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                  >
                    Fries
                  </a>
                </div>
              )}
            </div>
          
          <a href="/OurWork" className="text-gray-600 hover:text-green-600 mx-4">Work</a>           
            <a href="/AboutUs" className="text-gray-600 hover:text-green-600 mx-4">About</a>
            <a href="/Products" className="text-gray-600 hover:text-green-600 mx-4">Insights</a>
            <a href="/ContactUs" className="text-gray-600 hover:text-green-600 mx-4">Contact</a>

            <a
          href="/LoginForm"
          className="text-md md:text-xl font-regular capitalize ml-8 md:ml-32"
        >
          <button className="bg-green-600 hover:bg-green-700 text-white font-small sm py-2 px-3 rounded ">
            Login
          </button>
        </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${foodBackground})` }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to TasteNest</h1>
          <p className="text-xl mb-6">Delicious food delivered to your doorstep</p>
          <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">Order Now</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={chef} alt="Chef" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Chefs</h3>
                <p className="text-gray-600">Our chefs are experienced and passionate about creating delicious dishes.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={ingredients} alt="Ingredients" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Fresh Ingredients</h3>
                <p className="text-gray-600">We use only the freshest ingredients to ensure the best quality.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={delivery} alt="Delivery" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">We ensure quick delivery so you can enjoy your food while it's hot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
