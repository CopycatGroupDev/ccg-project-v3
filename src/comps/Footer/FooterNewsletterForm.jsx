import styled from "styled-components";
import { FooterInput as Input } from "./FooterInput";
import { useContext } from "react";
import Socket, { SocketContext } from "../../wrappers/Socket";
const FooterNewsletterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 0;
`

export default () => {
	const socket = useContext(SocketContext);

	return <FooterNewsletterForm onSubmit={e => {
		e.preventDefault();
		socket.emit('mailingList/add', e.target.mail.value, () => {});
		console.log("Submit", e.target.mail.value);
	}}>
		<Input type="email" name="mail" placeholder='Votre email' required/>
		<Input type="submit" value="Envoyer"/>
	</FooterNewsletterForm>
};