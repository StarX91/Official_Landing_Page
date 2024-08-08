"use client";

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from 'next/image';

export  function CombinedSection() {
  return (
    <section className="h-[400px] flex items-center justify-center bg-gray-100">
      <div className="container mx-auto flex h-full">
        <div className="w-2/5 h-full flex items-center justify-center">
          <AnimatedPinDemo />
        </div>
        <div className="w-3/5 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Section Title</h2>
          <p className="text-lg">
            This is where you can put your text content. It can be a description,
            information, or any other text you want to display alongside the animated pin.
          </p>
        </div>
      </div>
    </section>
  );
}

function AnimatedPinDemo() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <PinContainer
        title="AirMedic"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
        
          {/* <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div> */}
          <Image
        src="/airMedic.png"
        alt="Description of the image"
        layout="fill"
        objectFit="cover"
      />
        </div>
      </PinContainer>
    </div>
  );
}