import ContactForm from "../comps/Contact/ContactForm";
import AltHeader from "../comps/Header/AltHeader";
import Header from "../comps/Header/Header";
import Default from "../wrappers/Default";

export default function Contact() {
    return <Default title={"Contact - Copycat Group"}>
        <AltHeader
            bg={'/banners/contact.png'}
            title={"Formulaire de contact"}
            height={720}
            coverFull={true}
            bgCover={true}
            text={<>Chez Copycat Group, votre opinion compte. Nous sommes ravis de vous entendre et sommes là pour répondre à toutes vos questions, suggestions ou demandes. Remplissez simplement le formulaire ci-dessous et notre équipe se fera un plaisir de vous assister dans les meilleurs délais.</>} />
        <ContactForm />
    </Default>
}