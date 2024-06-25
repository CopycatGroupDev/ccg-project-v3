import { Link } from "react-router-dom";
import { FooterBottom as Bottom } from "./FooterBottom";
import { FooterContainer as Container } from "./FooterContainer";
import { FooterStyle as Style } from "./FooterStyle";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FooterColumns as Columns, FooterColumn as Column } from "./FooterColumns";
import { Title } from "../Title";
import { FooterInput as Input } from "./FooterInput";
import styled from "styled-components";

export default function Footer() {
    const icons = [
        { path: 'https://www.facebook.com/copycat.groupe/', Icon: ImFacebook2 },
        { path: 'https://www.instagram.com/copycat.groupe/', Icon: BsInstagram },
        { path: 'https://fr.linkedin.com/company/copycat-group', Icon: ImLinkedin },
    ]
    
    return <Style>
        <Container>
            <Columns>
                <Column>
                    <Title $color="#fff">Contactez nous</Title>
                    <Link to="/contact">01 45 07 98 00</Link>
                    <Link to="/contact">hello@copycatgroup.fr</Link>
                    <Link to="/contact">Trouver un Magasin :</Link>
                    <Link to="/contact">2 rue de ville d’Avray</Link>
                    <Link to="/contact">92310 SÈVRES</Link>
                </Column>
                <Column>
                    <Title $color="#fff">A propos</Title>
                    <Link to="/mentions" reloadDocument>Mentions légales</Link>
                    <Link to="/confidentialité" reloadDocument>Politique de confidentialité</Link>
                    <Link to="/services">Les services</Link>
                </Column>
                <Column>
                    <Title $color="#fff">Nos autres services</Title>
                    <Link to="https://copycat-shop.fr" target="_blank" rel="noreferrer">Copycat Shop</Link>
                    <Link to="http://www.copycatprint.fr/accueil/" target="_blank" rel="noreferrer">Copycat Print</Link>
                    <Link to="https://www.copycat.vous-livre.com/" target="_blank" rel="noreferrer">Copycat vous livre</Link>
                    <Link to="https://copycat-group.mydigitalcorner.fr/" target="_blank" rel="noreferrer">Copycat Group mydigitalcorner</Link>
                </Column>
                <Column>
                    <Title $color="#fff">Newsletter</Title>
                    <FooterNewsletterForm>
                        <Input type="email" name="mail" placeholder='Votre email' />
                        <Input type="button" value="Envoyer"/>
                    </FooterNewsletterForm>
                </Column>
            </Columns>
            <Bottom>
                <div className="end">Copyright : Copycat Group 2021</div>
                <div className="center">
                    {icons.map(({ path, Icon }) => <Link to={path} key={path}>
                        <Icon size={24} />
                    </Link>)}
                </div>
            </Bottom>
        </Container>
    </Style>
}

const FooterNewsletterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 0;
`