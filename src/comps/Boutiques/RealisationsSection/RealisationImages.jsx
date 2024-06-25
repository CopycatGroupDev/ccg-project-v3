import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import appears from '../../../methods/appears';

const Image = styled(motion.img)`
  height: 16rem; /* h-64 */
`;

const RealisationImages = ({ images, root }) => {
  return (
    <div /* className="flex flex-wrap gap-2 justify-center" */>
      {images.map((image, key) => (
        <Image key={btoa(JSON.stringify(image))} src={`/photos/${root}${image}.png`} {...appears(key)} />
      ))}
    </div>
  );
};

export default RealisationImages;