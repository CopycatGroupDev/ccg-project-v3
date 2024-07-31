import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from './Title';
import BannerTitle from './BannerTitle';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;
  width: 100%;
      justify-items: center;
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
  background-color: ${({ $color }) => $color};
  border-radius: 1rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 33%; 
  }
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
    border-radius: 1rem 1rem 0 0;
  }

  & div {
    color: white;
    padding: 1rem;
  }
`;

const Links = ({ links, color, title, banner, ...props }) => {
  return (
    <Container {...props}>
      {title && <>
        {banner ?
          <BannerTitle $color={color}>{title}</BannerTitle> :
          <Title $color='#000'>{title}</Title>}
      </>}
      <LinksContainer id='shop'>
        {links.map(({ img, text, link, color }, key) => (
          <StyledLink key={key} to={link} target='_blank' $color={color}>
            <img src={img} alt={text} />
            <div>{text}</div>
          </StyledLink>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Links;