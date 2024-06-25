import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '../Title';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 1024px;
  padding: 0 1rem;
  word-break: break-word;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledLink = styled(Link)`
  background-color: #f39115;
  width: 100%;
  display: grid;
  grid-template-rows: min-content;
  align-items: center;
  text-align: center;
  scroll-snap-align: center;
  font-size: 20px;
  text-decoration: none;

  & img {
    aspect-ratio: 2/1;
    background-color: #333;
    width: 100%;
  }

  & div {
    color: white;
    padding: 1rem;
  }
`;

const Links = ({ links, ...props }) => {
  return (
    <Container {...props}>
      <Title $color='#000'>{'Visitez nos sites partenaires'}</Title>
      <LinksContainer id='shop'>
        {links.map(({ img, text, link }, key) => (
          <StyledLink key={key} to={link}>
            <img src={img} alt={text} />
            <div>{text}</div>
          </StyledLink>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Links;