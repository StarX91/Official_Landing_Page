import SparklesPreview from '@/components/Hero'
import { NavigationMenuDemo } from '@/components/Navbar'
import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import About from '@/components/About'
import HeroScrollDemo from '@/components/Drone'
import TabsDemo from '@/components/Tabs'
import HeroParallaxDemo from '@/components/Industries'
import  ThreeDCardDemo  from '@/components/3Dcard'
import AirXMedic from '@/components/AirXMedic'
import FeaturesSectionDemo from '@/components/MedicalCare'
import ParallaxScrollDemo from '@/components/InfiniteCarousel'
import ImageCarousel from '@/components/InfiniteCarousel'
import LayoutGridDemo from '@/components/Partners'
import VideoBackground from '@/components/Navbarr'


function page() {
  return (
    <div>
      <ShootingStars />
      <StarsBackground />
       <Spotlight
        className="-top-10 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        {/* <Spotlight
    className="hidden md:block absolute -top-10 left-0 md:left-60 md:-top-20 w-full h-[200vh] pointer-events-none"
    fill="white"
  /> */}
      <NavigationMenuDemo />
     {/* <VideoBackground /> */}
      <SparklesPreview />
      <HeroScrollDemo />
      <ThreeDCardDemo />
      <FeaturesSectionDemo />
      <AirXMedic />
      <HeroParallaxDemo />
      <LayoutGridDemo />
      {/* <ImageCarousel /> */}
      <About />

    </div>
  )
}

export default page
