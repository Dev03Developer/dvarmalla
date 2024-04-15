import React, { useState, useEffect } from 'react';

const slides = [
  {
    imageUrl: 'https://www.varmalla.com/wp-content/uploads/2023/09/first-slide-banner-img.webp',
    subhead: 'ITC GRAND BHARAT, DELHI-NCR',
    header: "GET THE BEST DEALS ON THE WORLD'S ELITE DESTINATION WEDDING HOTELS WITH VARMALLA",
    description: 'Destination Wedding Planner | Exclusive Wedding Hotel Network | Luxury Weddings | Unlock Insider Pricing',
  },
  {
    imageUrl: 'https://www.varmalla.com/wp-content/uploads/2023/09/second-slide-banner-img-scaled.webp',
    subhead: 'WHERE DREAMS TURN INTO REALITY',
    header: 'CRAFTING RESPLENDENT WEDDING MEMORIES THAT WILL LAST A LIFETIME',
    description: 'Destination Wedding Planner | Exclusive Wedding Hotel Network | Luxury Weddings | Unlock Insider Pricing',
  },
  {
    imageUrl: 'https://www.varmalla.com/wp-content/uploads/2023/09/raffles-udaipur-1-6513fde017884-scaled.webp',
    subhead: 'RAFFLES UDAIPUR',
    header: 'UNIQUE LUXURY HOTELS THAT REFLECT YOUR CLASS',
    description: 'Destination Wedding Planner | Exclusive Wedding Hotel Network | Luxury Weddings | Unlock Insider Pricing',
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='relative h-screen'>
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            idx === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.imageUrl} alt={`slide ${idx}`} className="w-full h-full" />
          <div className='absolute inset-0 flex flex-col justify-center items-start max-w-screen-xl mx-auto'>
            <span className='text-lg'>{slide.subhead}</span>
            <h1 className='text-5xl font-bold mb-2'>{slide.header}</h1>
            <p className='text-lg'>{slide.description}</p>
            <button className='bg-coffee font-bold py-3 px-5 border border-coffee rounded uppercase mt-6 cwhite '>Plan My Wedding</button>
          </div>
        </div>
      ))}
      <div className='absolute inset-0 flex items-center justify-between'>
        <button
          className='absolute top-1/2 left-4 bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300'
          onClick={goToPrevSlide}
        >
          Prev
        </button>
        <button
          className='absolute top-1/2 right-4 bg-gray-800 white-color p-2 rounded-full hover:bg-gray-600 transition-colors duration-300'
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
