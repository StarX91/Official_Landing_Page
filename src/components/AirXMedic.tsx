// import React from 'react';
// import CarouselDemo from './Carousel-component';

// const AirXMedic = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center w-full p-4 mt-16">
//         <h1 className="text-center text-2xl font-bold mt-8 text-cyan-600">AirXMedic: Revolutionizing Medical Supply Delivery</h1>
        
//         <div className="flex flex-wrap items-center justify-center w-full mt-16" style={{ height: '500px' }}>
//           <div className="w-full md:w-1/2 flex items-center justify-center p-4">
//             <p className="text-balance font-light text-lg">
//               We conducted successful medical supplies trials at AIIMS Patna and AIIMS Gorakhpur, showcasing the groundbreaking capabilities of our flagship initiative, Airxmedic. During these trials, we achieved a remarkable distance of 20 kilometers with a payload of 5 kilograms. The successful trials at AIIMS Patna and AIIMS Gorakhpur demonstrate the reliability, efficiency, and effectiveness of Airxmedic in delivering vital medical supplies and services to remote locations. We are proud to showcase our capabilities to the world, highlighting our commitment to advancing healthcare solutions that make a meaningful impact on people’s lives.
//             </p>
//           </div>
//           <div className="w-full md:w-1/2 flex items-center mt-4 justify-center p-4">
//             <CarouselDemo />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AirXMedic;


import React from 'react';
import CarouselDemo from './Carousel-component';

const AirXMedic = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-4 mt-16">
        <h1 className="text-center text-2xl  font-bold mt-8 text-cyan-600">AirXMedic: Revolutionizing Medical Supply Delivery</h1>
        
        <div className="flex flex-wrap items-center justify-center w-full mt-16" style={{ height: 'auto' }}>
          <div className="w-full lg:w-[40%] flex items-center justify-center p-4">
            <p className="text-center lg:text-left font-light text-lg">
              We conducted successful medical supplies trials at AIIMS Patna and AIIMS Gorakhpur, showcasing the groundbreaking capabilities of our flagship initiative, Airxmedic. During these trials, we achieved a remarkable distance of 20 kilometers with a payload of 5 kilograms. The successful trials at AIIMS Patna and AIIMS Gorakhpur demonstrate the reliability, efficiency, and effectiveness of Airxmedic in delivering vital medical supplies and services to remote locations. We are proud to showcase our capabilities to the world, highlighting our commitment to advancing healthcare solutions that make a meaningful impact on people’s lives.
            </p>
          </div>
          <div className="w-full lg:w-[60%] flex items-center mt-4 justify-center p-4">
            <CarouselDemo />
          </div>
        </div>
      </div>
    </>
  );
};

export default AirXMedic;

