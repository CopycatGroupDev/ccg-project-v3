import styled from 'styled-components';
import { Title } from '../Title';
import BannerTitle from '../BannerTitle';
import Container from './Container';
import LinksContainer from './LinksContainer';
import StyledLink from './StyledLink';

export default ({ links, color, title, banner, ...props }) => {
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
};;