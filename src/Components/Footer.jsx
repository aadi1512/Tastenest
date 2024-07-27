import React from "react";
// import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-gray-900 text-gray-400">
            <footer className="text-center">
                <div className="container mx-auto py-8">
                    <section className="mb-4">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="md:mx-4 mb-2 md:mb-0">
                                <h6 className="uppercase font-bold">
                                    <a href="/" className="text-gray-400 hover:text-white">
                                    TasteNest
                                    </a>
                                </h6>
                            </div>
                            <div className="md:mx-4 mb-2 md:mb-0">
                                <h6 className="uppercase font-bold">
                                    <a href="/" className="text-gray-400 hover:text-white">
                                        Home
                                    </a>
                                </h6>
                            </div>
                            <div className="md:mx-4 mb-2 md:mb-0">
                                <h6 className="uppercase font-bold">
                                    <a href="/AboutUs" className="text-gray-400 hover:text-white">
                                        About
                                    </a>
                                </h6>
                            </div>
                            <div className="md:mx-4 mb-2 md:mb-0">
                                <h6 className="uppercase font-bold">
                                    <a href="/ContactUs" className="text-gray-400 hover:text-white">
                                        Contacts
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr className="border-gray-600 my-3" />
                    <section className="mb-8">
                        <div className="flex justify-center">
                            <div className="lg:w-2/3">
                                <p className="text-gray-400">Introducing TasteNest: Elevate Your Culinary Journey! 🍽️✨</p>
                                <p className="text-gray-400">
                                Welcome to Foodies, your go-to destination for delicious meals delivered directly to your home. Our platform is designed to bring you an exceptional dining experience from the comfort of your own space. At Foodies, we pride ourselves on offering a diverse menu curated by expert chefs using only the freshest ingredients. Whether you're craving gourmet dishes, healthy meals, or quick snacks, we've got you covered.


                                </p>
                                <br></br>
                                <p className="text-gray-400">
                                Our user-friendly website makes it easy to browse our extensive menu, place orders, and track your delivery in real-time. With a commitment to quality and customer satisfaction, Foodies ensures that every meal is prepared with care and delivered promptly, so you can enjoy your food while it's hot and fresh.

Join the Foodies community today and explore a world of culinary delights delivered right to your door!{" "}
                                </p>
                                <p className="text-gray-400">TasteNest: Where flavor meets innovation. Savor the difference today! 🌟🍴</p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-4 flex justify-center gap-6">
                        <a
                            href="https://facebook.com"
                            className="text-gray-400 hover:text-white mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size="1.5em" />
                        </a>
                        <a
                            href="https://twitter.com"
                            className="text-gray-400 hover:text-white mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size="1.5em" />
                        </a>
                        <a
                            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                            className="text-gray-400 hover:text-white mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGoogle size="1.5em" />
                        </a>
                        <a
                            href="https://www.youtube.com"
                            className="text-gray-400 hover:text-white mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube size="1.5em" />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-gray-400 hover:text-white mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size="1.5em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in"
                            className="text-gray-400 hover:text-white mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size="1.5em" />
                        </a>
                        <a
                            href="https://github.com"
                            className="text-gray-400 hover:text-white mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size="1.5em" />
                        </a>
                    </section>
                    <div className="text-center mb-4 flex-col leading-10">
                        <p className="flex items-center justify-center">
                            <FaPhone className="mr-2" /> Call us at: +91 9874563210
                        </p>
                        <p className="flex items-center justify-center">
                            <FaEnvelope className="mr-2" /> Mail us at: khushi@gmail.com
                        </p>
                    </div>
                    <div className="text-center py-3 text-gray-400">
                        © 2024 Copyright:
                        <a href=" " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-1">
                            TasteNest
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
