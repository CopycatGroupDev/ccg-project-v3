import { useContext, useEffect, useState } from "react";
import { AppContext } from "../wrappers/Provider";
import axios from 'axios';
import { SocketContext } from "../wrappers/Socket";
import { Contact, LinksSettings, Login, MailingListSettings, QRCode, Users } from "../comps/Admin/Index";
import { Route, Routes } from "react-router-dom";
import routes from "../comps/Admin/Dashboard/routes";
import Dashboard from "../comps/Admin/Dashboard/Main";
import { createGlobalStyle } from "styled-components";

const BodyModifier = createGlobalStyle`
    html, body, #root {
        height: 100%;
        width: 100%;
        display: flex;
        overflow: hidden;
    }
    
    *{ box-sizing: border-box; }
`;

export default function () {
    const { cookies, reloadCookies, init } = useContext(AppContext);
    const socket = useContext(SocketContext);
    const [usrData, setUsrData] = useState({ admin : false });
    //console.log(`${window.location.protocol}//${window.location.hostname}/api/logout`);

    useEffect(() => {
        if (init && cookies?.["ccg-user"]) socket.emit('user/read', cookies["ccg-user"], setUsrData);
    }, [cookies?.["ccg-user"], init]);

    if (init) return (<>
        <BodyModifier />
        {!cookies?.["ccg-user"] ?
            <Login /> :
            <Dashboard>
                <Routes>
                    {/* <button onClick={() => axios.post(`${window.location.protocol}//${window.location.hostname}/api/logout`, {}, { withCredentials: true }).then(() => reloadCookies())}>Déconnexion</button> */}
                    {/* {usrData.admin && <Users />} */}
                    {routes.map(({ path, element }, i) => <Route key={i} path={path} element={element} />)}
                </Routes>
            </Dashboard>
        }
    </>)
}