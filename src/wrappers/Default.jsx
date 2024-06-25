import { useContext, useEffect } from "react";
import Footer from "../comps/Footer/Footer";
import { AppContext } from "./Provider";

export default function Default({title : newTitle, children}) {
    const { title } = useContext(AppContext);
    useEffect(() => {
        title.set(newTitle);
    }, []);

    return <>
        {children}
        <Footer />
    </>
}

