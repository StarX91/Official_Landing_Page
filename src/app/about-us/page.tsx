"use client";
import React from 'react';
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import Cards from '@/components/Cards';
import Team from '@/components/Team';
import Footer from '@/components/footer';


const words = [
  {
    text: "Leading",
  },
  {
    text: "the",
  },
  {
    text: "Future",
  },
  {
    text: "of",
  },
  {
    text: "Industrial",
  },
  {
    text: "Drone",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Manufacturing",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "&",
  },
  {
    text: "Aviation",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "R&D",
  },
];

const VideoBackground: React.FC = () => {
  return (
    <>

    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video1.mp4"
        autoPlay
        loop
        muted
      />
      
      {/* Transparent Navbar */}
      {/* <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10 bg-transparent">
        <div className="text-white font-bold text-lg lg-px-10">
     
          <img width={100} height={100} src='/Logo.png' />
        </div>
        
        <ul className="flex space-x-8 text-black  font-semibold">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#product" className="hover:underline">Product</a></li>
          <li><a href="#gallery" className="hover:underline">Gallery</a></li>
        </ul>
      </nav> */}

<nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10  backdrop-blur-md bg-white/30">
  <div className="text-white font-bold text-lg lg-px-10">
    <img width={100} height={100} src='/Logo.png' />
  </div>

  <ul className="flex space-x-8 text-black font-semibold">
    <li><a href="#home" className="hover:underline">Home</a></li>
    <li><a href="#about" className="hover:underline">About Us</a></li>
    <li><a href="#product" className="hover:underline">Product</a></li>
    <li><a href="#gallery" className="hover:underline">Gallery</a></li>
  </ul>
</nav>

 
    </div>
    



    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600  dark:text-neutral-200 text-xs sm:text-base  ">
      Innovating the Future of Aviation & Industrial Drones
      </p>
      <TypewriterEffectSmooth words={words} />
      
  
    </div>


    <div className="flex flex-col items-center justify-center h-screen bg-black">
  <h1 className=" lg:text-7xl text-5xl font-light text-white mb-4">About Star<span className="text-red-700">X</span>91</h1>
  <p className="text-center text-white my-8 max-w-4xl ">
  StarX91 is a leading Industrial Drone Manufacturing and Aviation R&D company, specializing in B2B and B2G sectors. We provide innovative, high-quality drones for industries like agriculture, 
  construction, and surveillance, prioritizing performance, durability, and customer satisfaction with tailored solutions and expert support.
  </p>
  <img 
    src="/about-img-2.png" 
    alt="Drones in a warehouse" 
    className="w-full max-w-5xl h-auto object-cover"
  />
</div>




  <Cards />
  <Team />
  <Footer />



    </>
  );
};

export default VideoBackground;
