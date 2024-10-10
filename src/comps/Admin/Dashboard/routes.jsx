import { Navigate } from "react-router-dom";
import { Contact, LinksSettings, MailingListSettings, QRCode, Users } from "../Index";
import Welcome from "../Welcome";

export default [
    {path: '/', element: <Welcome />, title: 'Admin'},
    {path: '/links', element: <LinksSettings />, title: 'Liens'},
    {path: '/mailing-list', element: <MailingListSettings />, title: 'Liste de diffusion'},
    {path: '/qr-code', element: <QRCode />, title: 'Code QR'},
    {path: '/users', element: <Users />, title: 'Utilisateurs'},
    {path: '/contact', element: <Contact />, title: 'Contacts'},
    {path: '*', element: <Navigate to="/admin" />}
]