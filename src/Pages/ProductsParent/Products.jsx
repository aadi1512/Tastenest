import React from 'react';
import Footer from '../../Components/Footer';


const Products = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-green-500 text-white p-8">
        <h1 className="text-4xl font-bold text-center">Food Insights</h1>
        <p className="text-center mt-4">Stay updated with the latest trends, recipes, and expert opinions in the world of food.</p>
      </header>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="article1.jpg" alt="Article 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Article Title 1</h3>
                <p className="mt-2 text-gray-600">A brief description of the article goes here.</p>
                <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="article2.jpg" alt="Article 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Article Title 2</h3>
                <p className="mt-2 text-gray-600">A brief description of the article goes here.</p>
                <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="article3.jpg" alt="Article 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Article Title 3</h3>
                <p className="mt-2 text-gray-600">A brief description of the article goes here.</p>
                <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Post Title 1</h3>
              <p className="mt-2 text-gray-600">A brief description of the popular post goes here.</p>
              <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Post Title 2</h3>
              <p className="mt-2 text-gray-600">A brief description of the popular post goes here.</p>
              <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Post Title 3</h3>
              <p className="mt-2 text-gray-600">A brief description of the popular post goes here.</p>
              <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Opinions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Expert 1</h3>
              <p className="mt-2 text-gray-600">An overview of the expert opinion goes here. Insights on current food trends, techniques, or health tips.</p>
              <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">Expert 2</h3>
              <p className="mt-2 text-gray-600">An overview of the expert opinion goes here. Insights on current food trends, techniques, or health tips.</p>
              <a href="#" className="text-green-500 mt-2 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
};

export default Products;
