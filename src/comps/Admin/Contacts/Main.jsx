import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../wrappers/Socket";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../config/colors";

export default function() {
    const socket = useContext(SocketContext);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        socket.emit('contacts/read', setContacts);
    }, [socket]);

    const labels = {
        color: 'Couleur',
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

        <Grid>
        {contacts.toSorted((a, b) => new Date(b.date) - new Date(a.date)).map(contact => {
            const url = new URL(contact.href);

            return <Box key={contact._id} $bgColor={colors[url.pathname.split('/').slice(-1)[0]] ?? colors.default}>
                {Object.entries(contact)
                .filter(([k, v]) => !["_id", "__v", "color"].includes(k))
                .map(([k, v]) => <div key={k}>
                    <b>{labels[k] || k} : </b>
                    {k === 'href' ? <Link to={v}>{v}</Link> : k === 'date' ? new Date(v).toLocaleString() : k === 'number' ? <a href={`tel:${v}`}>{v}</a> : k === 'mail' ? <a href={`mailto:${v}`}>{v}</a> : v}
                </div>)}
                {/* <button type="button" onClick={() => socket.emit('contacts/delete', contact._id)}>Supprimer</button> */}
            </Box>
        })}
        </Grid>
    </>;
}

const Box = styled.div`
    padding: 2rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: ${({ $bgColor }) => $bgColor ?? '#0061ad'};
    box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
    aspect-ratio: 1;
    height: fit-content;
    overflow: auto;
    a {
        color: white;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
`