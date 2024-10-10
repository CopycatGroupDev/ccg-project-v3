import { Link, useLocation, useParams } from "react-router-dom";
import routes from "./routes";
import styled from "styled-components";

export default styled.nav.attrs(function(){
    let { pathname } = useLocation();
    return {
        children: <>{routes.filter(({ path }) => path !== '*').map(({ path, title }, i) => <Link key={i} className={pathname === "/admin" + path ? "active" : ""} to={"/admin" + path}>{title}</Link>)}</>
    }
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: white;
    box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);

    a {
        width: 100%;
        text-align: center;
        padding: 0.75rem 1.5rem;
        white-space: nowrap;
        text-decoration: none;
        text-align: left;

        &.active {
            background: #0061AF;
            color: white;
        }
    }
`;