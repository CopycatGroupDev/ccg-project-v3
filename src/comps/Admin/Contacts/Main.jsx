import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../wrappers/Socket";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../config/colors";
import Grid from "../Grid";
import Box from "../Box";
import TableContainer from "../TableContainer";
import Table from "../Table";
import Button from "../Button";

export default function() {
    const socket = useContext(SocketContext);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        socket.emit('contacts/read', setContacts);
    }, [socket]);

    const labels = {
        //color: 'Couleur',
        href: 'URL',
        name: 'Nom',
        firstname: 'Prénom',
        firm: 'Société',
        number: 'Numéro de contact',
        mail: 'Email',
        message: 'Message',
        date: 'Date',
        how: 'Comment ?',
        city: 'Ville',
        zip: 'Code postal',
        subject: 'Objet',
    };

    return <>
        <h1>Contacts</h1>

        <TableContainer>
            <Table style={{ maxWidth: '100%', textAlign: 'left' }}>
                <thead>
                    <tr style={{ background: "#eee0" }}>
                        {Object.entries(labels).map(([k, v]) => <th key={k}>{v}</th>)}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.toSorted((a, b) => new Date(b.date) - new Date(a.date)).map(contact => {
                        const url = new URL(contact.href);
                        return <tr key={contact._id} style={{ background: colors[url.pathname.split('/').slice(-1)[0]] ?? colors.default, color: "#fffb" }}>
                            {Object.entries(labels).map(([k, v]) => <td key={k}>{k === 'date' ? new Date(contact?.[k]).toLocaleString() : contact?.[k]}</td>)}
                            <td><Button type="button" onClick={() => socket.emit('contacts/delete', contact._id)}>X Supprimer</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </TableContainer>

        {/* <Grid>
        {contacts.toSorted((a, b) => new Date(b.date) - new Date(a.date)).map(contact => {
            const url = new URL(contact.href);

            return <Box key={contact._id} $bgColor={colors[url.pathname.split('/').slice(-1)[0]] ?? colors.default}>
                {Object.entries(contact)
                .filter(([k, v]) => !["_id", "__v", "color"].includes(k))
                .map(([k, v]) => <div key={k}>
                    <b>{labels[k] || k} : </b>
                    {k === 'href' ? <Link to={v}>{v}</Link> : k === 'date' ? new Date(v).toLocaleString() : k === 'number' ? <a href={`tel:${v}`}>{v}</a> : k === 'mail' ? <a href={`mailto:${v}`}>{v}</a> : v}
                </div>)}
                {<button type="button" onClick={() => socket.emit('contacts/delete', contact._id)}>Supprimer</button>}
            </Box>
        })}
        </Grid> */}
    </>;
}