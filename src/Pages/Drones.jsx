import React from 'react';
import MainDrone from "../assets/DroneImages/Main_drone.jpg";
import Drone1 from "../assets/DroneImages/Drone1.jpg";
import Drone2 from "../assets/DroneImages/Drone2.jpg";
import Drone3 from "../assets/DroneImages/Drone3.jpg";
import Drone4 from "../assets/DroneImages/Drone4.jpg";
import Footer from '../Components/Footer';

const Drones = () => {
  const data = [
    {
      heading: "DJI Mavic 3 Pro",
      Paragraph: "Inspiration in Focus",
      btn: "GET STARTED",
      img: Drone1,
      reverse: false,
    },
    {
      heading: "DJI Mini 4 Pro",
      Paragraph: "Mini to the Max",
      btn: "GET STARTED",
      img: Drone2,
      reverse: false,
    },
    {
      heading: "DJI Air 3",
      Paragraph: "Double Up",
      btn: "GET STARTED",
      img: Drone3,
      reverse: false,
    },
    {
      heading: "DJI Inspire 3",
      Paragraph: "Master the Unseen",
      btn: "GET STARTED",
      img: "https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png",
      reverse: false,
    },
  ];

  return (
    <>
      <div>
        <div className='w-full h-[20vh] flex-col justify-center items-center text-center m-5'>
          <h1 className='text-bold text-6xl leading-loose max-w-8xl'>Pizza'sss</h1>
          <p className='text-[18px] mx-auto max-w-md text-gray-600'>Elevate your dining experience with gourmet ingredients, artisanal treats, or chef-crafted meals.</p>
        </div>

        <div className=' text-white px-5'>
          <div className='w-full absolute h-[20vh] flex-col justify-center items-center text-center'>
            <h1 className='text-bold text-6xl leading-snug max-w-8xl'>Pizza</h1>
            <p className='text-[18px] mx-auto max-w-md text-gray-600'>All Thrills No Frills</p>
            <p className=' mt-2 text-bold text-blue-400'>Buy Now</p>
          </div>
          <img src={MainDrone} alt="" />
        </div>

        <section className="px-3 lg:py-1">
          <div className="grid lg:grid-cols-2 gap-10 m-10">
            {data.map((item, index) => (
              <div key={index} className={`lg:order-${item.reverse ? '2' : '1'}`}>

                <div className='absolute h-[20vh] flex-col w-[45vw] justify-center items-center text-center'>
                  <h1 className='text-bold text-6xl leading-snug max-w-8xl'>{item.heading}</h1>
                  <p className='text-[18px] mx-auto max-w-md text-gray-600'>{item.Paragraph}</p>
                  <p className=' mt-2 text-bold text-blue-400'>Buy Now</p>
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
      </div>
      <Footer />
    </>
  );
};

export default Drones;
