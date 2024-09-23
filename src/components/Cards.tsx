import React from 'react'
import Card from './ui/Cards'


interface DataItem {
    title: string;
    number: number;
    change: number;
  }
  
  const dummyData: DataItem[] = [
    { title: "Active Users", number: 1200, change: 15 },
    { title: "New Sign-ups", number: 450, change: -10 },
    { title: "Total Sales", number: 3500, change: 5 },
  ];

const Cards = () => {
  return (
    <div className="p-5 my-40">
      <h1 className="text-5xl font-light text-center my-8">Our Statistics</h1>
      <div className="flex flex-row justify-between items-center gap-8">
        {dummyData.map((item, index) => (
          <div key={index} className="w-full  sm:w-1/3">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
