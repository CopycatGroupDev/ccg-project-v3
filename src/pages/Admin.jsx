import { useContext, useEffect, useState } from "react";
import { AppContext } from "../wrappers/Provider";
import axios from 'axios';
import { SocketContext } from "../wrappers/Socket";
import { Contact, LinksSettings, Login, MailingListSettings, QRCode, Users } from "../comps/Admin/Index";

export default function () {
    const { cookies, reloadCookies, init } = useContext(AppContext);
    const socket = useContext(SocketContext);
    const [usrData, setUsrData] = useState({ admin : false });
    //console.log(`${window.location.protocol}//${window.location.hostname}/api/logout`);

    useEffect(() => {
        if (init && cookies?.["ccg-user"]) socket.emit('user/read', cookies["ccg-user"], setUsrData);
    }, [cookies?.["ccg-user"], init]);

    if (init) return (<>
        <h1>Admin</h1>
        {!cookies?.["ccg-user"] ? <Login /> : <>
            <button onClick={() => axios.post(`${window.location.protocol}//${window.location.hostname}/api/logout`, {}, { withCredentials: true }).then(() => reloadCookies())}>Déconnexion</button>
            {/* {usrData.admin && <Users />} */}
            <Contact />
            <LinksSettings />
            <MailingListSettings />
            <QRCode />
        </>}
    </>)
}