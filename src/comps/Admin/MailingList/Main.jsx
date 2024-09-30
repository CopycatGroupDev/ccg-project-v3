import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../../../wrappers/Socket"
import { Link } from "react-router-dom";
import { AppContext } from "../../../wrappers/Provider";

export default function(){
    const { mailingList } = useContext(AppContext);
    const socket = useContext(SocketContext);

    return <>
        <h1>Mails</h1>
        {Object.values(mailingList)?.map(mail =>
            <div key={mail}>
                <Link to={`mailto:${mail}`} target='_blank'>{mail}</Link>
                <button type="button" onClick={() => socket.emit('mailingList/delete', mail)}>Supprimer</button>
            </div>
        )}
    </>
}