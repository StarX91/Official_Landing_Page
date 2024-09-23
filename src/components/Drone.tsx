"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

const HeroScrollDemo=()=> {
  return (
    <div className="flex flex-col">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the true power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Drones
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/drone-dji.jpg`}
          alt="hero"
          height={720}
          width={1900}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
