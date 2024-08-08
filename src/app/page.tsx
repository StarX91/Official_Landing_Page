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


function page() {
  return (
    <div>
      <ShootingStars />
      <StarsBackground />
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <NavigationMenuDemo />
      <SparklesPreview />
      <HeroScrollDemo />
      <TabsDemo />
      <HeroParallaxDemo />
      <About />

    </div>
  )
}

export default page
