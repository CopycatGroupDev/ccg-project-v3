import { createContext, useContext, useEffect } from "react";
import Footer from "../comps/Footer/Footer";
import { AppContext } from "./Provider";
import { useLocation } from "react-router-dom";
export const DefaultContext = createContext(null);

export default function Default({children, value}) {
    const location = useLocation();
    useEffect(() => {
        const scrollHash = () => {
            if (location?.hash !== "") {
                if (document.querySelector(location?.hash)?.getBoundingClientRect().top > 1) window.scrollTo( 0, document.querySelector(location?.hash)?.getBoundingClientRect().top, { behavior: 'smooth' });
            }else{
                window.scroll(0, 0);
            }
        }
        setTimeout(scrollHash, 0);
        setTimeout(scrollHash, 500);
    }, [location?.hash]);

    const { title } = useContext(AppContext);
    useEffect(() => {
        title?.set(value?.title);
    }, [title?.set, title, value?.title]);

    return <DefaultContext.Provider value={value}>
        {children}
        <Footer />
    </DefaultContext.Provider>
}

