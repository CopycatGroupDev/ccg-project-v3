import { Link } from "react-router-dom";
import { HomeServicesCardLayout } from "./HomeServicesCardLayout";
import { HomeServicesCardHead } from './HomeServicesCardHead';

export function HomeServicesCard({ img, title, desc, btnText, btnOnClick, color, to, ...props }) {
    return <HomeServicesCardLayout $color={color} {...props}>
        <HomeServicesCardHead>
            <img src={img} alt={title} />
            <span>COPYCAT <span style={{ color: color }}>{title}</span></span>
        </HomeServicesCardHead>
        <p>{desc}</p>
        <Link onClick={btnOnClick} to={to} reloadDocument target="_blank">{btnText}</Link>
    </HomeServicesCardLayout>
}