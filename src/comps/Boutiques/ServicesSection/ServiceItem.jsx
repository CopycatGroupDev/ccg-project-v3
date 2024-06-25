import { motion } from "framer-motion";
import styled from "styled-components";

const ServiceItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
  font-size: 1.5rem; /* text-2xl */
  text-align: center;
  overflow-wrap: break-word;

  @media (min-width: 1024px) {
    width: 33%;
  }
`;

export default ServiceItem;