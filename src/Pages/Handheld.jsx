import React from "react";
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Hand1 from "../assets/HandHeldImages/Handheld2.jpg";
import Hand2 from "../assets/HandHeldImages/Handheld3.jpg";
import Hand3 from "../assets/HandHeldImages/Handheld4.jpg";
import Hand4 from "../assets/HandHeldImages/Handheld5.jpg";
import Footer from "../Components/Footer";

const Handheld = () => {
  const data = [
    {
      heading: "DJI Mavic 3 Pro",
      Paragraph: "Inspiration in Focus",
      btn: "GET STARTED",
      img: Hand1,
      reverse: false,
    },
    {
      heading: "DJI Mini 4 Pro",
      Paragraph: "Mini to the Max",
      btn: "GET STARTED",
      img: Hand2,
      reverse: false,
    },
    {
      heading: "DJI Air 3",
      Paragraph: "Double Up",
      btn: "GET STARTED",
      img: Hand3,
      reverse: false,
    },
    {
      heading: "DJI Inspire 3",
      Paragraph: "Master the Unseen",
      btn: "GET STARTED",
      img: Hand4,
      reverse: false,
    },
  ];

  return (
    <div>
      <div className="w-full h-[20vh] flex-col justify-center items-center text-center m-5">
        <h1 className="text-bold text-6xl leading-loose max-w-8xl">
          Handheld Imaging Devices
        </h1>
        <p className="text-[18px] mx-auto max-w-xl text-gray-600">
          From casual vlogging to professional shoots, there's always an action
          camera or a hand-held stabilizer that's right for you.
        </p>
      </div>

      <div className="relative w-full h-[60vh]">
        <img
          src={MainHand}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center text-center">
          <h1 className="text-bold text-6xl leading-snug max-w-8xl text-white">
            Gourment
          </h1>
          <p className="text-[18px] mx-auto max-w-md text-gray-200">
            All Thrills No Frills
          </p>
          <p className="mt-2 text-bold text-blue-400">Buy Now</p>
        </div>
      </div>

      <section className="px-3 lg:py-1">
        <div className="grid lg:grid-cols-2 gap-10 m-10">
          {data.map((item, index) => (
            <div key={index} className={`lg:order-${item.reverse ? "2" : "1"}`}>
              <div className="absolute h-[20vh] flex-col w-[45vw] justify-center items-center text-center">
                <h1 className="text-bold text-6xl leading-snug max-w-8xl">
                  {item.heading}
                </h1>
                <p className="text-[18px] mx-auto max-w-md text-gray-600">
                  {item.Paragraph}
                </p>
                <p className=" mt-2 text-bold text-blue-400">Buy Now</p>
              </div>

              <img
                className="w-full h-auto lg:max-w-[46vw] lg:h-[500px] object-cover"
                src={item.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Handheld;
