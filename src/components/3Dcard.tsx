


"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words=`OUR PRODUCTS`

const cards = [
  {
    image: '/card1.jpg',
    title: 'AirXMedic',
    description: 'The Medic series is a unique product when it comes to immediate medical assistance during disaster',
  },
  {
    image: '/card4.webp',
    title: 'AirXKrishi',
    description: 'The Krishi series drones offer an innovative solution for farmers to boost their crop production',
  },
  {
    image: '/card3.jpg',
    title: 'AirXView',
    description: 'The Ultimate boss of surveillance, AirXView is the one and only multi-use surveillance drone',
  },
  {
    image: '/card4.jpg',
    title: 'AirXLink',
    description: 'The Link series opens up amazing possibilities of drone delivery with the highest efficiency',
  },
];

const ThreeDCardDemo = () => {
  return (
    <>
    <h1 className="font-thin text-center text-white relative z-20 align-middle lg:mb-4 "><TextGenerateEffect className="font-light lg:text-10xl" words={words} /></h1>
    {/* <TextGenerateEffect className="md:text-5xl text-3xl lg:text-10xl  italics lg:mb-4 text-center text-white relative z-20 align-middle p-2" words={words} /> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:pt-4 gap-4 p-4">
         {cards.map((card, index) => (
           <CardContainer key={index} className="w-full h-full">
             <CardBody className="relative group/card w-4/5 h-full bg-gray-50 dark:bg-black border dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
               <CardItem
                 translateZ="50"
                 className="text-xl font-bold text-neutral-600 dark:text-white"
               >
                 {card.title}
               </CardItem>
               <CardItem
                 as="p"
                 translateZ="60"
                 className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
               >
                 {card.description}
               </CardItem>
               <CardItem translateZ="100" className="w-full mt-4">
                 <Image
                   src={card.image}
                   layout="responsive"
                   width={1000}
                   height={1000}
                   className="object-cover rounded-xl group-hover/card:shadow-xl"
                   alt={card.title}
                 />
               </CardItem>
             </CardBody>
           </CardContainer>
         ))}
       </div>
    </>
    
  );
};

export default ThreeDCardDemo;

