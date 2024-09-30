import { useContext } from 'react';
import { AppContext } from './wrappers/Provider';
import GStyle from './comps/GStyle';
import axios from 'axios';

export default function App() {
    const context = useContext(AppContext);

    return <>
        <GStyle />
        {context && <context.modal.Modal />}
        {context && <context.routes.Routes />}
        {context && <context.nav.Nav />}
    </>
}