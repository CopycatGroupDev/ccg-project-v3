import { motion } from "framer-motion";
import styled from "styled-components";

const TabImage = styled(motion.img)`
  height: 35px;
  width: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  --mix-blend-mode: multiply;
  border: 0.5px solid ${({ $color }) => $color};
`;
export default TabImage;