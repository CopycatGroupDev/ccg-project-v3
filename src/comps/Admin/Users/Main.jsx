import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../wrappers/Provider";
import { SocketContext } from "../../../wrappers/Socket";

export default function () {
    const { cookies, reloadCookies, init } = useContext(AppContext);
    const socket = useContext(SocketContext);
    const [usrsData, setUsrsData] = useState([]);

    useEffect(() => {
        socket.emit('users/read', (data) => {
            setUsrsData(data);
            console.log(data);
        });
    }, [socket]);

    return (<>
        <h1>Utilisateurs</h1>
        {usrsData.map(usr => <form>
            {Object.entries(usr).filter(([k, v]) => k !== "_id").map(([k, v]) => {
                if (typeof v === 'string') {
                    if (k === 'password') return <div key={k}><label htmlFor={k}>{k}</label><input type="password" id={k} value={v} /></div>
                    return <div key={k}><label htmlFor={k}>{k}</label><input type="text" id={k} value={v} /></div>
                }
                if (typeof v === 'boolean') return <div key={k}><label htmlFor={k}>{k}</label><input type="checkbox" id={k} checked={v} /></div>
                return <div key={k}><label htmlFor={k}>{k}</label><input type="number" id={k} value={v} /></div>
            })}
        </form>)}
    </>)
}