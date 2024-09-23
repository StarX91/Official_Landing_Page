'use client'


import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const chartData = [
  { month: "Endurance", desktop: 186, mobile: 80 },
  { month: "Range", desktop: 305, mobile: 200 },
  { month: "Size", desktop: 237, mobile: 120 },
  { month: "Performance", desktop: 73, mobile: 190 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { ThreeDCardDemo } from "@/components/3Dcard"
import { CombinedSection } from "@/components/3Dpin"

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const backgroundImages = [
    "/drone2.jpg",
    "/drone4.jpg",
    "/image2.png",
    "/image3.png",

    // Add as many images as you want here
  ];

  
    const videos = [
      "/video1.mp4",
      "/video2.mp4"
    ];

  useEffect(() => {
    // Preload images
    const imagePromises = backgroundImages.map(src => {
      return new Promise<void>((resolve, reject) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(error => console.error("Error preloading images:", error));
  }, []);

  useEffect(() => {
    // Only start the interval after images are loaded
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        );
      }, 4000); // Change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [imagesLoaded, backgroundImages.length]);

  const cards = [
    { image: '/card1.jpg', title: 'AirXMedic', description: 'The Medic series is a unique product when it comes to immediate medical assistance during disaster' },
    { image: '/card4.webp', title: 'AirXKrishi', description: 'The Krishi series drones offer an innovative solution for farmers to boost their crop production' },
    { image: '/card3.jpg', title: 'AirXView', description: 'The Ultimate boss of surveillance, AirXView is the one and only multi-use surveillance drone' },
    { image: '/card4.jpg', title: 'AirXLink', description: 'The Link series opens up amazing possibilities of drone delivery with the highest efficiency' },
  ];

  return (
    <div>
    <div className="relative w-full h-screen">
      <section>
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={` absolute inset-0 transition-opacity duration-1000 ${
            imagesLoaded ? (index === currentImageIndex ? 'opacity-100' : 'opacity-0') : 'opacity-0'
          }`}
        >
          <Image 
          className='mb-2'
            src={src}
            alt={`Background ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}
      
      <nav className="relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-1">
              <div className="flex-shrink-0">
                <Link href="/" className="block">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={94}
                    height={64}
                  />
                </Link>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <Link href="/Home" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link href="/About Us" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
                  <Link href="/Product" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">Product</Link>
                  <Link href="/Product" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/login" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium"></Link>
                <Link href="/signup" className="ml-2 text-white bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium">Know More</Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/products" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
              <Link href="/enterprise" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Enterprise</Link>
              <Link href="/solutions" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Solutions</Link>
              <Link href="/login" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Log in</Link>
              <Link href="/signup" className="text-white bg-blue-500 hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium">Sign up</Link>
            </div>
          </div>
        )}
      </nav>
      </section>

     
    </div>
    <section className="py-12 px-4 ">
        {/* <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="relative h-[200px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: 'cover' , }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* <ThreeDCardDemo /> */}
      </section>

      {/* <section>
      <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {videos.map((videoSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <video 
                    controls 
                    className="w-full h-full"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </section> */}

<section className="flex justify-center items-center min-h-screen">
  <Carousel className="w-full max-w-7xl">
    <CarouselContent>
      {videos.map((videoSrc, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-video items-center justify-center p-6">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</section>
<div>

  </div>
   <CombinedSection />
    </div>
  );
};

export default Navigation;