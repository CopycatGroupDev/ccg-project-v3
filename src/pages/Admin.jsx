import { useContext } from "react";
import LinksSettings from "../comps/Admin/Links/Main";
import Login from "../comps/Admin/Login/Main";
import MailingListSettings from '../comps/Admin/MailingList/Main';
import { AppContext } from "../wrappers/Provider";
import axios from 'axios';

export default function () {
    const { cookies, reloadCookies } = useContext(AppContext);
    return (<>
        <h1>Admin</h1>
        {!cookies?.["ccg-user"] ? <Login /> : <>
            <button onClick={() => axios.post(`http://${window.location.hostname}/api/logout`, {}, { withCredentials: true }).then(() => reloadCookies())}>Déconnexion</button>
            <LinksSettings />
            <MailingListSettings />
        </>}
    </>)
}