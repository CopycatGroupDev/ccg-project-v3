import { navLinks } from "../../config/navLinks";
import { HeaderNavItem as Item } from "./HeaderNavItem";

export function HeaderNavItems() {
    return <ul>
        {navLinks.map(item => <Item key={item.path} {...item} />)}
    </ul>
}