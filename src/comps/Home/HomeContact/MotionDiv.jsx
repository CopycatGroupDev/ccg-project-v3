import styled from "styled-components";
import { motion } from 'framer-motion';

export default styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  height: 650px;
  @media (max-width: 640px) {
    height: min-content;
  }
`;