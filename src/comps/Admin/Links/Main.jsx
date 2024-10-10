import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../../../wrappers/Socket"
import { Link } from "react-router-dom";
import { AppContext } from "../../../wrappers/Provider";
import TableContainer from "../TableContainer";
import Table from "../Table";
import Button from "../Button";
import Input from "../Input";

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
        <TableContainer>
            <Table style={{ maxWidth: '100%', textAlign: 'left' }}>
                <thead>
                    <tr style={{ background: "#eee0" }}>
                        <th>Network</th>
                        <th>Url</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(updatedLinks)?.map(([ network, url ]) =>
                        <tr key={network}>
                            <td><Link to={url} target='_blank'>{network}</Link></td>
                            <td>
                                <form style={{ display: 'flex', gap: '0.5em' }} key={network} onSubmit={e => {e.preventDefault(); socket.emit('links/update', network, updatedLinks[network])}}>
                                    <Input type="text" value={updatedLinks?.[network] ?? url ?? defaultNtwrks[network] ?? ""} onChange={e => setLinks({ ...updatedLinks, [network]: e.target.value })} placeholder="url" />
                                    <Button type="submit">Sauvegarder</Button>
                                </form>
                            </td>
                            <td><Button type="button" onClick={() => socket.emit('links/delete', network)} disabled={!defaultNtwrks[network]}>Supprimer</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </TableContainer>
    </>
}