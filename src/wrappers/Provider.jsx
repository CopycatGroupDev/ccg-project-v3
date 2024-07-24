/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import { io } from 'socket.io-client';
import { createContext } from "react";
import useModal from "../hooks/useModal";
import useToast from "../hooks/useToast";
import useRoutes from "../hooks/useRoutes";
import useTitle from "../hooks/useTitle";
import useNav from "../hooks/useNav";

const style = {
    gap : 2, //em
}

export const AppContext = createContext({
    title: null,
    modal: null,
    toast: null,
    routes: null,
    nav: null
});

export default function ({ children }) {
    const modal = useModal();
    const toast = useToast();
    const routes = useRoutes();
    const title = useTitle();
    const nav = useNav();

    return <AppContext.Provider value={{ modal, toast, routes, title, nav, style }}>
        {children}
    </AppContext.Provider>
}