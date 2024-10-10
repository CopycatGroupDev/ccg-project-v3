import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../wrappers/Provider";
import { SocketContext } from "../../../wrappers/Socket";
import TableContainer from "../TableContainer";
import Table from "../Table";
import Button from "../Button";

export default function () {
    const { cookies, reloadCookies, init } = useContext(AppContext);
    const socket = useContext(SocketContext);
    const [usrsData, setUsrsData] = useState([]);

    useEffect(() => {
        socket.emit('users/read', (data) => setUsrsData(data));
    }, [socket]);

    return (<>
        <h1>Utilisateurs</h1>
        <TableContainer>
            <Table style={{ maxWidth: '100%', textAlign: 'left' }}>
                <thead>
                    <tr style={{ background: "#eee0" }}>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usrsData.map(usr => <tr key={usr._id}>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        <td> <Button type="button" onClick={() => socket.emit('users/delete', usr._id)}>X Supprimer</Button> </td>
                    </tr>)}
                </tbody>
            </Table>
            <Button type="button" onClick={() => socket.emit('users/add', usr._id)}>+ Ajouter un utilisateur</Button>
        </TableContainer>
    </>)
}