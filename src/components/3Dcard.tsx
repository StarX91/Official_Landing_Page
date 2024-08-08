// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

// export function ThreeDCardDemo() {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
    
//       </CardBody>
//     </CardContainer>
//   );
// }


"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

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

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var w-[100%]">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={card.title}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}


