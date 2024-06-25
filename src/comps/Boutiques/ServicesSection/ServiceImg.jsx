import styled from "styled-components";

const ServiceImg = styled.img`
  height: 4rem;
  ${( { $trnsIcon } ) => $trnsIcon ? "mix-blend-mode: darken;" : ""}
`;

export default ServiceImg;