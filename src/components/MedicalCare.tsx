"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

const FeaturesSectionDemo = () => {
  const features = [
    {
      title: `THE LIFE SAVER!!`,
      description: "",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-6 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Air Telemedicine Box",
      description:
        "The Air Telemedicine Box by AirXmedic is a groundbreaking solution that brings immediate medical assistance to remote areas.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Anywhere, Anytime",
      description:
        "Air Telemedicine Box ensures access to essential healthcare services, especially in underserved regions.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-4 sm:px-8">
        <h4 className="text-2xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm sm:text-base lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          It is designed to bridge the gap between patients and healthcare professionals, providing timely and life-saving medical support.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl pb-2 mx-auto text-center tracking-tight text-black dark:text-white text-lg sm:text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-xs sm:text-sm md:text-base max-w-4xl text-center mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative text-center justify-center flex py-4 sm:py-8 px-2 gap-5 sm:gap-10">
      <div className="w-full p-3 sm:p-5 text-center mx-auto bg-white dark:bg-neutral-900 shadow-2xl group">
        <div className="flex w-full flex-col">
          <Image
            src="/AIRXMEDIC-SCALED.webp"
            alt="header"
            width={1600} 
            height={800} 
            className="w-full object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <Image
          src="/Telemedicine.webp"
          alt="header"
          width={800}
          height={800}
          className="h-full w-full aspect-square object-contain object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
        />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-80 md:h-80 sm:mt-4 sm:pt-6 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export default FeaturesSectionDemo;
