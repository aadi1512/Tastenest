import React from "react";
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Hand1 from "../assets/HandHeldImages/Handheld2.jpg";
import Hand2 from "../assets/HandHeldImages/Handheld3.jpg";
import Hand3 from "../assets/HandHeldImages/Handheld4.jpg";
import Hand4 from "../assets/HandHeldImages/Handheld5.jpg";
import t1 from "../assets/Drivers Img/team_01.jpg";
import t2 from "../assets/Drivers Img/team_02.jpg";
import t3 from "../assets/Drivers Img/team_03.jpg";
import t4 from "../assets/Drivers Img/team_04.jpg";
import Driver1 from "../assets/Drivers Img/Driver1.jpg";
import { PiFanFill } from "react-icons/pi";
import { GrTarget } from "react-icons/gr";
import { TbLicense, TbTargetArrow } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { FaNfcSymbol } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const data = [
    {
      heading: "Quality Ingredients",
      Paragraph:
        "We source the finest ingredients to create meals that are both delicious and wholesome.",
      btn: "ORDER NOW",
      img: Hand1,
      reverse: false,
      icon: <PiFanFill size={25} />,
    },
    {
      heading: "Variety of Dishes",
      Paragraph:
        "Our extensive menu ensures that there's something for everyone, from classic favorites to innovative new dishes.",
      btn: "ORDER NOW",
      img: Hand2,
      reverse: false,
      icon: <GrTarget size={25} />,
    },
    {
      heading: "Customer Satisfaction",
      Paragraph:
        "Your happiness is our priority. We strive to provide exceptional service and delicious food every time you order from us.",
      btn: "ORDER NOW",
      img: Hand3,
      reverse: false,
      icon: <TbLicense size={25} />,
    },
    {
      heading: "Fast Delivery",
      Paragraph:
        "Engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive.",
      btn: "ORDER NOW",
      img: Hand4,
      reverse: false,
      icon: <LiaSuitcaseSolid size={25} />,
    },
  ];

  const data2 = [
    {
      heading: "SATISFIED CLIENTS",
      Paragraph:
        "Average agile frameworks to provide a robust synopsis for high level overviews of our services.",
      icon: <TbTargetArrow size={60} />,
    },
    {
      heading: "ORDERS COMPLETED",
      Paragraph:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and purpose.",
      icon: <AiOutlineFileDone size={60} />,
    },
    {
      heading: "FAST DELIVERY",
      Paragraph:
        "Bring to the table win-win survival strategies to ensure proactive delivery service.",
      icon: <FaNfcSymbol size={60} />,
    },
    {
      heading: "HIGH-QUALITY MEALS",
      Paragraph:
        "Capitalize on low-hanging fruit to identify a ballpark value-added activity for driving test.",
      icon: <GiDeliveryDrone size={60} />,
    },
  ];

  const team = [
    {
      heading: "John Doe",
      Paragraph:
        "John is our head chef, dedicated to crafting delicious and high-quality meals.",
      img: t1,
      designation: "Head Chef",
    },
    {
      heading: "Jane Smith",
      Paragraph:
        "Jane oversees our customer service, ensuring every experience is a delight.",
      img: t2,
      designation: "Customer Service Manager",
    },
    {
      heading: "Michael Brown",
      Paragraph:
        "Michael manages our deliveries, making sure your food arrives hot and on time.",
      img: t3,
      designation: "Delivery Manager",
    },
    {
      heading: "Emily Johnson",
      Paragraph:
        "Emily is our marketing guru, spreading the word about our amazing food.",
      img: t4,
      designation: "Marketing Manager",
    },
  ];

  return (
    <>
      <div className="">
        <div className="relative w-full h-[60vh]">
          <img
            src={MainHand}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
            <h1 className="text-bold text-6xl leading-snug max-w-8xl text-white">
              Welcome to Karigari
            </h1>
            <p className="text-[18px] mx-auto max-w-md text-gray-200 mt-4">
              Delicious pizza, burgers, pasta, and rice delivered to your door.
            </p>
            <Link
              to="/order"
              className="mt-4 text-lg font-semibold bg-blue-500 text-white py-2 px-4 rounded-full"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center py-20 px-10 bg-gray-100">
          <div className="flex-shrink-0 w-full md:w-[28vw] mb-10 md:mb-0">
            <img src={Driver1} alt="" className="rounded-lg shadow-lg" />
          </div>
          <section className="flex flex-col justify-center items-start w-full md:w-2/3 md:pl-20">
            <h1 className="text-lg font-semibold text-gray-700 mb-2">ABOUT US</h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Great Food, Delivered
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              At Karigari , we believe that great food brings
              people together. Our passion for delicious, high-quality meals
              inspired us to create a menu that caters to every craving and
              every occasion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start gap-y-5"
                >
                  <div className="flex items-center">
                    <span className="text-blue-500 pr-2">{item.icon}</span>
                    <h1 className="font-semibold text-2xl text-gray-800">{item.heading}</h1>
                  </div>
                  <p className="text-md text-gray-600">{item.Paragraph}</p>
                  <Link
                    to="/order"
                    className="mt-4 text-md font-semibold text-blue-500 hover:underline"
                  >
                    {item.btn}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative w-full py-20 bg-gray-200">
          <div className="absolute inset-0 flex flex-col items-center text-center">
            <h1 className="font-bold text-5xl leading-snug max-w-8xl text-gray-800 mb-4">
              Our Values
            </h1>
            <p className="text-xl mx-auto max-w-xl text-gray-600 font-medium">
              We are dedicated to quality, variety, and exceptional customer
              service.
            </p>
          </div>

          <div className="absolute grid grid-cols-1 md:grid-cols-4 w-full top-[50%] px-10 gap-8">
            {data2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center text-center px-4 py-8 bg-white rounded-lg shadow-md"
              >
                <span className="text-blue-500 text-5xl mb-4">{item.icon}</span>
                <h1 className="text-lg font-bold text-gray-800 mb-2">{item.heading}</h1>
                <p className="text-md text-gray-600">{item.Paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;