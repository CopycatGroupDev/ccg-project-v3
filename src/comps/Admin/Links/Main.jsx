import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../../../wrappers/Socket"
import { Link } from "react-router-dom";
import { AppContext } from "../../../wrappers/Provider";

const defaultNtwrks = {
    facebook : null,
    instagram : null,
    linkedin : null
}

export default function(){
    const { links } = useContext(AppContext);
    const socket = useContext(SocketContext);
    const [updatedLinks, setLinks] = useState({ ...defaultNtwrks, ...links });

    useEffect(() => {
        setLinks({ ...defaultNtwrks, ...links });
    }, [links]);

    return <>
        <h1>Liens</h1>
        {Object.entries(updatedLinks)?.map(([ network, url ]) =>
            <form key={network} onSubmit={e => {e.preventDefault(); socket.emit('links/update', network, updatedLinks[network])}}>
                <Link to={url} target='_blank'>{network}</Link> : 
                <input type="text" value={updatedLinks?.[network] ?? url ?? defaultNtwrks[network] ?? ""} onChange={e => setLinks({ ...updatedLinks, [network]: e.target.value })} placeholder="url" />
                <button type="submit">Sauvegarder</button>
                <button type="button" onClick={() => socket.emit('links/delete', network)} disabled={!defaultNtwrks[network]}>Supprimer</button>
            </form>
        )}
    </>
}