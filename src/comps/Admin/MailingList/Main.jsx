import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../../../wrappers/Socket"
import { Link } from "react-router-dom";
import { AppContext } from "../../../wrappers/Provider";
import TableContainer from "../TableContainer";
import Table from "../Table";
import Button from "../Button";

export default function(){
    const { mailingList } = useContext(AppContext);
    const socket = useContext(SocketContext);

    return <>
        <h1>Mails</h1>
        <TableContainer>
            <Table style={{ maxWidth: '100%', textAlign: 'left' }}>
                <thead>
                    <tr style={{ background: "#eee0" }}>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(mailingList)?.map(mail =>
                        <tr key={mail}>
                            <td><Link to={`mailto:${mail}`} target='_blank'>{mail}</Link></td>
                            <td><Button type="button" onClick={() => socket.emit('mailingList/delete', mail)}>X Supprimer</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </TableContainer>
    </>
}