import emailjs from '@emailjs/browser';
import { useContext, useEffect } from 'react';
import { SocketContext } from '../../wrappers/Socket';
import { FormContext } from './Main';

export default function() {
    const socket = useContext(SocketContext);
    const formCtxt = useContext(FormContext);
    const { color } = useContext(FormContext);

    return {
        submit : (e) => {
            e.preventDefault();
            const callback = () => {
                const inputs = [["URL", window.location.href], ...formCtxt?.formFields?.map(({ placeholder, name }) => [placeholder, e.target[name].value])];
                const message = inputs.map(([placeholder, value]) => `${placeholder}: ${value}`).join('\n');
                emailjs.send('service_vxg3w2p', 'template_phpkqbm', { color, message, to_name: 'Erwan' }, 'lY6gm08EUXQdiwdgh');
                alert('Message envoyé');
            }
            socket.emit('contact/submit', formCtxt?.color, window.location.href, formCtxt?.formFields?.map(({ placeholder, name }) => ({name, placeholder, value : e.target[name].value})), callback);

            //emailjs.send('service_o6semg5', 'template_fngu4h2', { color, message: mailText, to_name: 'Erwan' }, '8Rs9RvEbWiGOIy4pj');
            //emailjs.send('service_chpg77d', 'template_fngu4h2', { color, message: mailText, to_name: 'Erwan' }, '8Rs9RvEbWiGOIy4pj');
            //emailjs.send('service_vxg3w2p', 'template_phpkqbm', { color, message: mailText, to_name: 'Erwan' }, 'lY6gm08EUXQdiwdgh');
        }
    }
}
