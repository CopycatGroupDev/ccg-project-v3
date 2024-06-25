import { useContext } from "react";
import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Header';
import { AppContext } from "../wrappers/Provider";
import Services from "../comps/Home/HomeServices";
import PDG from "../comps/Home/PDG";
import Sponsors from "../comps/Home/Sponsors";
import HomeContact from "../comps/Home/HomeContact";
import contactForms from "../config/contactForms";
import Form from "../comps/ConcactForm/Form";
import { colors } from "../config/colors";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { modal } = useContext(AppContext);
    const navigate = useNavigate();

    return <Default title={"Copycat Group"}>
        <Header
            textsRows={[
                '« Document as a Service »',
                'Votre interlocuteur privilégié au service du document !',
                <HeaderButton key={btoa(Math.random())} color={colors.default} onClick={() => navigate('/contact')}>Demander une expertise</HeaderButton>
            ]}
            bg={'/banners/home.png'}
            logo={'/logo/ccg.jpg'}
            color={'#0061ad'} />
        <Services />
        <PDG />
        <Sponsors />
        <HomeContact />
        <style>{'body { background-color: #fff; }'}</style>
    </Default>
}