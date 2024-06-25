import { useState } from "react";
import { navLinks } from "../config/navLinks";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import Background from "../comps/MobileNav/Background";
import Content from "../comps/MobileNav/Content";
import NavOverlay from "../comps/MobileNav/Overlay";
import { motion } from "framer-motion";
import CLink from "../comps/MobileNav/CLink";

export default function useNav() {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);
    const [sectionOpen, setSectionOpen] = useState(null);

    return {opened, toggle, Nav : () => opened && <NavOverlay initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.125, ease: 'easeInOut' }} viewport={{ once: true }}>
        <Background onClick={toggle} />
        <Content>
            {navLinks.map((item, i) =>
                <motion.div key={i} initial={{ opacity: 0, x: 200, scale: 0.75 }} animate={{ opacity: 100, x: 0, scale: 1 }} transition={{ duration: 0.25, delay: 0.125*i, ease: 'easeInOut' }}>
                    {(sectionOpen === null || sectionOpen === i) &&
                    <CLink $color={item.color} key={item.path}>
                        <Link to={item.path} onClick={toggle}><h2>{item.title}</h2></Link>
                        <button onClick={e => {
                            e.preventDefault();
                            setSectionOpen(sectionOpen === i ? null : i);
                        }}>
                            {sectionOpen !== i ? <IoIosArrowDown size={32} /> : <IoIosArrowBack size={32} />}
                        </button>
                    </CLink>}
                    {sectionOpen === i && item.dropdown.map((item_, i_) => <CLink key={i_} $color={item.color}>
                        <Link to={item_.path} onClick={toggle}>
                            {item_.title}
                        </Link>
                    </CLink>)}
                </motion.div>)}
        </Content>
    </NavOverlay>};
}