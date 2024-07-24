import { Link } from "react-router-dom";
import { FooterBottom as Bottom } from "./FooterBottom";
import { FooterContainer as Container } from "./FooterContainer";
import { FooterStyle as Style } from "./FooterStyle";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FooterColumns as Columns, FooterColumn as Column } from "./FooterColumns";
import { Title } from "../Title";
import FooterNewsletterForm from "./FooterNewsletterForm";

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
                    <section>
                        <Title $color="#fff">Contactez le siège</Title>
                        <Link to="mailto:hello@copycatgroup.fr">hello@copycatgroup.fr</Link>
                    </section>
                    <section>
                        <Title $color="#fff">Trouver un comptoir</Title>
                        <Link to="/sevres" reloadDocument>Sèvres</Link>
                        <Link to="/boulogne" reloadDocument>Boulogne-Billancourt</Link>
                    </section>
                </Column>
                <Column>
                    <Title $color="#fff">Nos services</Title>
                    <Link to="/solutions" reloadDocument>CopyCat Solutions</Link>
                    <Link to="/shop" reloadDocument>CopyCat Shop</Link>
                    <Link to="/print" reloadDocument>CopyCat Print</Link>
                    <Link to="/labs" reloadDocument>CopyCat Labs</Link>
                </Column>
                <Column>
                    <Title $color="#fff">Mes garanties</Title>
                    <Link to="/mentions" reloadDocument>Mentions légales</Link>
                    <Link to="/confidentialité" reloadDocument>Politique de confidentialité</Link>
                </Column>
                <Column>
                    <Title $color="#fff">Newsletter</Title>
                    <FooterNewsletterForm />
                </Column>
            </Columns>
            <Bottom>
                <div>Copyright : Copycat Group 2021</div>
                <div>
                    {icons.map(({ path, Icon }) => <Link to={path} key={path} target="_blank">
                        <Icon size={24} />
                    </Link>)}
                </div>
            </Bottom>
        </Container>
    </Style>
}