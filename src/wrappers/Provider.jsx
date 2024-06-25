import { createContext } from "react";
import useModal from "../hooks/useModal";
import useToast from "../hooks/useToast";
import useRoutes from "../hooks/useRoutes";
import useTitle from "../hooks/useTitle";
import useNav from "../hooks/useNav";
export const AppContext = createContext(null);

export default function Provider({ children }) {
    const modal = useModal();
    const toast = useToast();
    const routes = useRoutes();
    const title = useTitle();
    const nav = useNav();

    return <AppContext.Provider value={{ modal, toast, routes, title, nav }}>
        {children}
    </AppContext.Provider>
}