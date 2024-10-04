import emailjs from '@emailjs/browser';
import { io } from '../config/server.js';
import links from '../models/links.js';
import mailing_list from '../models/mailing_list.js';
import users from '../models/users.js';
import jsonData from './jsonData.js';
import contact from '../models/contact.js';

export default async (socket) => {
	socket.leaveAll();
	//socket.onAny((eventName, ...args) => console.log(eventName, ...args));
	//socket.onAny((eventName, ...args) => console.log(Object.keys(socket.rooms)));
	//socket.onAnyOutgoing((eventName, ...args) => console.log(eventName, ...args));
	
	//console.log('a user connected');
	//console.log(JSON.stringify(Object.entries(jsonData('links')).map(([k, v]) => ({ network: k, url: v }))));
	//socket.emit('links', jsonData('links'));

	socket.emit('links/read', Object.fromEntries((await links.find()).map(link => [link.network, link.url])));
	socket.on('links/update', async (network, url) => {
		await links.updateOne({ network }, { url }, { upsert: true });
		socket.emit('links/read', Object.fromEntries((await links.find()).map(link => [link.network, link.url])));
	});
	socket.on('links/delete', async (network) => {
		await links.deleteOne({ network });
		socket.emit('links/read', Object.fromEntries((await links.find()).map(link => [link.network, link.url])));
	});

	socket.emit('mailingList/read', (await mailing_list.find()).map(link => link.mail));
	socket.on('mailingList/add', async mail => {
		const Mail = await mailing_list.findOne({ mail });
		console.log(Mail);
		if (!Mail) {
			const newMail = new mailing_list({ mail });
			console.log(newMail);
			await newMail.save();
		};
		socket.emit('mailingList/read', (await mailing_list.find()).map(link => link.mail));
	});
	socket.on('mailingList/delete', async mail => {
		await mailing_list.deleteOne({ mail });
		socket.emit('mailingList/read', (await mailing_list.find()).map(link => link.mail));
	});

	socket.on('user/read', async (id, callback) => {
		try {
			const user = await users.findById(id);
			callback(user);
		} catch (error) {
			console.log(error);
			callback({});
		}
	});

	socket.on('users/read', async callback => {
		try {
			const users_ = await users.find();
			callback(users_);
		} catch (error) {
			console.log(error);
			callback({});
		}
	});

	socket.on('contact/submit', async (color, href, data, callback) => {
		try {
			console.log({ color, href, ...Object.fromEntries(data.map(({ name, value }) => [name, value])) });

			const newContact = new contact({ color, href, ...Object.fromEntries(data.map(({ name, value }) => [name, value])) });
			await newContact.save();
			//const inputs = [["URL", href], ...data?.map(({ placeholder, value }) => [placeholder, value])];
            //const message = inputs.map(([placeholder, value]) => `${placeholder}: ${value}`).join('\n');
			//emailjs.send('service_vxg3w2p', 'template_phpkqbm', { color, message, to_name: 'Erwan' }, 'lY6gm08EUXQdiwdgh');
			callback(true);
		} catch (error) {
			console.log(error);
			callback(false);
		}
	});
	socket.on('contacts/read', async callback => {
		try {
			const contacts = await contact.find();
			callback(contacts);
		} catch (error) {
			console.log(error);
			callback({});
		}
	});

	socket.on('connect', () => {
	})
}