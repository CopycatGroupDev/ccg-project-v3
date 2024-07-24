import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Slide = styled(motion.img)`
  position: absolute;
  width: 75%;
  height: 66%;
  object-fit: contain;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #4d91c6 !important;
  border: none;
  border-radius: 50%;
  color: white;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  box-sizing: content-box;

  &:focus {
    outline: none;
  }

  &:first-of-type {
    left: 1rem;
  }

  &:last-of-type {
    right: 1rem;
  }
`;

const Indicators = styled.div`
  position: absolute;
  --bottom: 1rem;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const Indicator = styled.button`
  aspect-ratio: 1/1;
  height: 0.66rem;
  padding: 0;
  background-color: ${props => (props.$isActive ? '#0061ad' : '#4d91c6')};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Carousel = ({ images, className }) => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (newDirection) => {
    setCurrent([current + newDirection, newDirection]);
  };

  const goToSlide = (index) => {
    setCurrent([index, index > current ? 1 : -1]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [current]);

  const imageIndex = ((current % images.length) + images.length) % images.length;

  return (
    <CarouselContainer className={className}>
      <AnimatePresence initial={false} custom={direction}>
        <Slide
          key={imageIndex}
          src={'/extLogos/' + images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        />
      </AnimatePresence>
      {/* <Button onClick={() => paginate(-1)}>&#9664;</Button>
      <Button onClick={() => paginate(1)}>&#9654;</Button> */}
      <Indicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            $isActive={index === imageIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

export default Carousel;
