"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return(
    <div className="m-2">
<HeroParallax  products={products} />
    </div>

  ) 
}
export const products = [
  {
    title: "Agriculture",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/agriculture.webp",
  },
  {
    title: "Surveillance",
    link: "https://cursor.so",
    thumbnail:
      "/dji-img.jpg",
  },
  {
    title: "Healthcare",
    link: "https://userogue.com",
    thumbnail:
      "/drone-dji.jpg",
  },

  {
    title: "Disaster Relief",
    link: "https://editorially.org",
    thumbnail:
      "/drone3.jpg",
  },
  {
    title: "Disaster Relief",
    link: "https://editorially.org",
    thumbnail:
      "/drone3.jpg",
  },
  {
    title: "Agriculture",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/agriculture.webp",
  },
  {
    title: "Surveillance",
    link: "https://cursor.so",
    thumbnail:
      "/dji-img.jpg",
  },
  {
    title: "Healthcare",
    link: "https://userogue.com",
    thumbnail:
      "/drone-dji.jpg",
  },
  {
    title: "Disaster Relief",
    link: "https://editorially.org",
    thumbnail:
      "/drone3.jpg",
  },
  {
    title: "Agriculture",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/agriculture.webp",
  },
  {
    title: "Surveillance",
    link: "https://cursor.so",
    thumbnail:
      "/dji-img.jpg",
  },
  {
    title: "Healthcare",
    link: "https://userogue.com",
    thumbnail:
      "/drone-dji.jpg",
  },



  
];


export default HeroParallaxDemo;
