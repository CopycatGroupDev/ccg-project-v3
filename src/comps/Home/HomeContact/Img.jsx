import styled from "styled-components";

export default styled.img`
  width: 100%;
  height: 100%;
  border: none;
  scrolling: no;
  margin: 0;
  object-fit: contain;
  aspect-ratio: 604/710;

  @media (max-width: 640px) {
    height: min-content;
  }`;