import { HeaderNavBurgerMenu as BurgerMenu } from "./HeaderNavBurgerMenu";
import { HeaderNavItems as Items } from "./HeaderNavItems";
import { HeaderNavLayout as Layout } from "./HeaderNavLayout";
import { HeaderNavLogo as Logo } from "./HeaderNavLogo";

export default function HeaderNav() {
    return <Layout>
        <Logo src="logo/logo.png" alt="" />
        <Items />
        <BurgerMenu />
    </Layout>
}
