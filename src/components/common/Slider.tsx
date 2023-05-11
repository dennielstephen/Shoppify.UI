import { useState } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const images = [
  {
    src: 'https://source.unsplash.com/800x600/?nature',
    alt: 'Nature 1',
  },
  {
    src: 'https://source.unsplash.com/800x600/?water',
    alt: 'Water 1',
  },
  {
    src: 'https://source.unsplash.com/800x600/?mountain',
    alt: 'Mountain 1',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative w-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`${
            index === current ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 absolute top-0 left-0 w-full h-full object-cover`}
        />
      ))}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <IconButton onClick={handlePrev}>
          <ArrowBackIosNew />
        </IconButton>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </div>
    </div>
  );
};

export default Slider;
