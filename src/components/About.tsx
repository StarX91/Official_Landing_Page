import React from 'react';
import { GlobeDemo } from './Globe';
import { HeroHighlightDemo } from './Hero-highlight';

const About = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-2">
        <GlobeDemo />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <HeroHighlightDemo />
      </div>
    </div>
  );
};

export default About;
