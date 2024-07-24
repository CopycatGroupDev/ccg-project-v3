import { motion } from "framer-motion";
import styled from "styled-components";

export default styled(motion.div)`
display: flex;
flex-direction: column;
gap: 1.5rem;
scroll-snap-align: center;
scroll-snap-stop: always;

p{
  margin: 0;
}
`;