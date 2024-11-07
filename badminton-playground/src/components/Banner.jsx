// src/components/Banner.js
import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-900 text-white">
      <Slider {...settings}>
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/image1.jpg')" }}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-3xl font-bold">Welcome to Aftabnagar Badminton Club</h2>
          </div>
        </div>
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/image2.jpg')" }}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-3xl font-bold">Join the Fun and Play with Us!</h2>
          </div>
        </div>
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/image3.jpg')" }}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-3xl font-bold">See Who's Playing Tonight!</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
