import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentImage = styled(motion.img)`
  aspect-ratio: 625 / 418;
  background-color: black;
  width: 100%;
`;

export const ContentDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentText = styled(motion.p)`
  text-align: left;
`;