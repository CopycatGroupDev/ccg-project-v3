import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext } from "../../wrappers/Provider";

export function HeaderNavBurgerMenu() {
    const { nav : { toggle } } = useContext(AppContext);
    return <button onClick={toggle} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
        <RxHamburgerMenu size={32} />
    </button>
}