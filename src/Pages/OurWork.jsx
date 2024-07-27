
import React from 'react';
import Footer from '../Components/Footer';
import Hand1 from "../assets/HandHeldImages/Handheld2.jpg";
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Hand2 from "../assets/HandHeldImages/Handheld3.jpg";


const WorkPage = () => {
  
  return (

    
    <div className="bg-white text-gray-800">
      <header className="bg-green-500 text-white p-8">
        <h1 className="text-4xl font-bold text-center">Our Work</h1>
        <p className="text-center mt-4">Discover the delicious creations and passionate work we put into our food.</p>
      </header>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Recipes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={Hand1} alt="Recipe 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Recipe Title 1</h3>
                <p className="mt-2 text-gray-600">Short description of the recipe goes here.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={Hand2} alt="Recipe 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Recipe Title 2</h3>
                <p className="mt-2 text-gray-600">Short description of the recipe goes here.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={MainHand} alt="Recipe 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Recipe Title 3</h3>
                <p className="mt-2 text-gray-600">Short description of the recipe goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-gray-600 mb-4">"The food here is absolutely amazing! The flavors are incredible and the presentation is beautiful."</p>
              <p className="text-gray-800 font-bold">- Customer 1</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-gray-600 mb-4">"I've never had such delicious meals before. The chefs really know how to bring out the best in every ingredient."</p>
              <p className="text-gray-800 font-bold">- Customer 2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg" type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg" type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg" type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
    
  );
};



export default WorkPage;
