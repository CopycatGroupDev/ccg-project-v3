import { Link as Lnk } from "react-router-dom";
import { HeaderNavItemLi as Li } from "./HeaderNavItemLi";
import { HeaderNavItemDropdown } from "./HeaderNavItemDropdown";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "./HeaderNavItemDropdownIcon";

const Link = styled(Lnk)`padding: 1rem 0rem;`;

export function HeaderNavItem({ path, title, dropdown, color }) {
    const dropdownRef = useRef(null);
    const liRef = useRef(null);
    const setDropdown = e => {
        const { width: drpdwnW, x: drpdwnX } = dropdownRef.current.getBoundingClientRect()
        const { width: bodyW } = document.body.getBoundingClientRect()
        const overflow = (drpdwnX + drpdwnW) >= (bodyW - 100);
        if (overflow) liRef.current.classList.add('right')
        //else liRef.current.classList.remove('right')
    }
    return <Li $color={color} ref={liRef}>
        <Link onMouseOver={setDropdown} to={path}>{title}</Link>
        <div className="dropdownContainer">
            <HeaderNavItemDropdown initial={{ opacity: 0 }} ref={dropdownRef} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} $color={color}>
                {dropdown.map(({ path, title, desc, icon }) => <Link to={path} key={title}>
                    <Icon src={`/icons/dropdowns/${icon}.png`} alt="" />
                    <div>
                        {title}
                        {/* <small>{desc}</small> */}
                    </div>
                </Link>)}
            </HeaderNavItemDropdown>
        </div>
    </Li>
}