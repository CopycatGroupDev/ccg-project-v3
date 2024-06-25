import { Cover } from "../comps/Header/Cover";
import { HeaderLayout as Layout } from "../comps/Header/HeaderLayout";
import Nav from "../comps/Header/HeaderNav";
import { HeaderText as Text } from "../comps/Header/HeaderText";
import BoutiquesMenu from "../comps/Header/BoutiquesMenu";

export default function Boutiques() {
    return <Layout $color={'#0061ad'}>
        <Cover $full={true} src={"/banners/boutiques.png"} alt="logo" />
        <BoutiquesMenu />
        <Text>
            <Nav />
        </Text>
    </Layout>
}