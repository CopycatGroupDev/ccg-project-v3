/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import { io } from 'socket.io-client';
import { createContext, useContext, useEffect, useState } from "react";
import useModal from "../hooks/useModal";
import useToast from "../hooks/useToast";
import useRoutes from "../hooks/useRoutes";
import useTitle from "../hooks/useTitle";
import useNav from "../hooks/useNav";
import { SocketContext } from './Socket';
import axios from 'axios';

const style = {
    gap : 2, //em
}

export const AppContext = createContext({
    title: null,
    modal: null,
    toast: null,
    routes: null,
    nav: null,
    links: null,
});

export default function ({ children }) {
    const modal = useModal();
    const toast = useToast();
    const routes = useRoutes();
    const title = useTitle();
    const nav = useNav();
    const [links, setLinks] = useState({});
    const [mailingList, setMailingList] = useState({});
    const [cookies, setCookies] = useState({});

    const reloadCookies = () => axios.post(`http://${window.location.hostname}/api/cookies`, {}, { withCredentials: true }).then(({ data : r }) => setCookies(r));
    const socket = useContext(SocketContext);
    useEffect(() => {
        socket.on('links/read', setLinks);
        socket.on('mailingList/read', setMailingList);
        reloadCookies();
        
        return () => {
            
        };
    }, [socket]);

    return <AppContext.Provider value={{ modal, toast, routes, title, nav, style, links, mailingList, cookies, reloadCookies }}>
        {children}
    </AppContext.Provider>
}