


// import React from 'react';

// const ImageCarousel: React.FC = () => {
//   const images = [
//     '/Partner1.png',
//     '/Partner2.png',
//     '/Partner5.png',
//     '/Partner6.png',
//     '/Partner7.png',
//     '/Partner3.png',
 
//     // Add more image paths here
//   ];

//   return (
//     <div className='m-80'>
//     <h1 className='font-serif text-4xl text-center text-white relative z-20 align-middle lg:mb-4 '>OUR PARTNERS</h1>
//     <div className="overflow-hidden  w-full my-2">
//       <div className="flex animate-scroll space-x-4">
//         {images.concat(images).map((src, index) => (
//           <div key={index} className=" rounded-md flex-shrink-0 w-[400px] h-[190px] bg-white p-2">
//             <img
//               src={src}
//               alt={`Carousel ${index}`}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ImageCarousel;

import React from 'react';

const ImageCarousel: React.FC = () => {
  const images = [
    '/Partner1.png',
    '/Partner2.png',
    '/Partner5.png',
    '/Partner6.png',
    '/Partner7.png',
    '/Partner3.png',
    // Add more image paths here
  ];

  return (
    <div className="mx-auto m-40 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-2xl md:text-4xl text-center text-white mb-6">OUR PARTNERS</h1>
      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll space-x-4">
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              className="rounded-md flex-shrink-0 w-[300px] h-[140px] sm:w-[350px] sm:h-[165px] md:w-[400px] md:h-[190px] bg-white p-2"
            >
              <img
                src={src}
                alt={`Carousel ${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
