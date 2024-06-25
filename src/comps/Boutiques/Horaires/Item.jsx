import { motion } from "framer-motion";
import styled from "styled-components";

const Item = styled(motion.div)`
  display: flex;
  border-radius: 1rem 0 0 1rem;
  background-color: ${({ color }) => `${color}4f`};
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
`;

export default Item;