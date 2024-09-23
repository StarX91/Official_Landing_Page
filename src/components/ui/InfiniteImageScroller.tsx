import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
  src: string;
  alt: string;
}

interface InfiniteCarouselProps {
  images: Image[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '400px', height: '190px', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '400px',
                height: '190px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;