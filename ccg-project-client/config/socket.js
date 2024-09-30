import { io } from '../config/server.js';
import links from '../models/links.js';
import mailing_list from '../models/mailing_list.js';
import jsonData from './jsonData.js';

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

	socket.on('connect', () => {
	})
}