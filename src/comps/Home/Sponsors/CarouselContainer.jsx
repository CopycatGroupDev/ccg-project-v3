import { motion } from "framer-motion";
import styled from "styled-components";

export default styled(motion.div)`
  display: flex;
  --border: 1px solid #e5e7eb; /* tailwind border */
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); /* tailwind shadow */
  border-radius: 0.75rem; /* tailwind rounded-xl */
  padding: 1rem; /* tailwind p-4 */
  background-color: #ffffff; /* tailwind bg-white */
  aspect-ratio: 1/1;
  @media (min-width: 640px) {
    height: 350px;
  }
  aspect-ratio: 16/9; /* tailwind lg:aspect-video */
`;