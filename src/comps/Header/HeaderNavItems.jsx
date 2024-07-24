import { navLinks } from "../../config/navLinks";
import { HeaderNavItem as Item } from "./HeaderNavItem";

export function HeaderNavItems() {
    return <ul style={{
        margin: 0,
    }}>
        {navLinks.map(item => <Item key={item.path} {...item} />)}
    </ul>
}