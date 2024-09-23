import React from 'react';
import TeamCard from '../components/ui/TeamCard';

const Team= () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-3xl font-bold mb-8">Our Team</h1>
      <div className="flex flex-wrap -mx-4">
        <TeamCard
          imgSrc="img1.jpg"
          name="Jane Doe"
          title="CEO & Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="example@example.com"
        />
        <TeamCard
          imgSrc="img2.jpg"
          name="Mike Ross"
          title="Art Director"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="example@example.com"
        />
        <TeamCard
          imgSrc="img3.jpg"
          name="John Doe"
          title="Designer"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="example@example.com"
        />
        <TeamCard
          imgSrc="img1.jpg"
          name="Jane Doe"
          title="CEO & Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="example@example.com"
        />
        <TeamCard
          imgSrc="img1.jpg"
          name="Jane Doe"
          title="CEO & Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="example@example.com"
        />
        <TeamCard
          imgSrc="img1.jpg"
          name="Jane Doe"
          title="CEO & Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="example@example.com"
        />
      </div>
    </div>
  );
};

export default Team;
