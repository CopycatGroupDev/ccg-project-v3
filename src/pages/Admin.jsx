import { useContext, useEffect, useState } from "react";
import { AppContext } from "../wrappers/Provider";
import axios from 'axios';
import { SocketContext } from "../wrappers/Socket";
import { LinksSettings, Login, MailingListSettings, QRCode, Users } from "../comps/Admin/Index";

export default function () {
    const { cookies, reloadCookies, init } = useContext(AppContext);
    const socket = useContext(SocketContext);
    const [usrData, setUsrData] = useState({ admin : false });

    useEffect(() => {
        if (init && cookies?.["ccg-user"]) socket.emit('user/read', cookies["ccg-user"], setUsrData);
    }, [cookies?.["ccg-user"], init]);

    if (init) return (<>
        <h1>Admin</h1>
        {!cookies?.["ccg-user"] ? <Login /> : <>
            <button onClick={() => axios.post(`http://${window.location.hostname}/api/logout`, {}, { withCredentials: true }).then(() => reloadCookies())}>Déconnexion</button>
            {usrData.admin && <Users />}
            <LinksSettings />
            <MailingListSettings />
            <QRCode />
        </>}
    </>)
}