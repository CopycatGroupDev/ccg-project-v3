import links from '../models/links.js';
import mailing_list from '../models/mailing_list.js';
import * as controllers from '../controllers/index.js';

export default async (socket) => {
	socket.leaveAll();
	const $ = new Proxy(controllers, { get : (target, func) => controllers[func](socket) });
	
	socket.emit('links/read', Object.fromEntries((await links.find()).map(link => [link.network, link.url])));
	socket.on('links/update', $.linksUpdate);
	socket.on('links/delete', $.linksDelete);
	socket.emit('mailingList/read', (await mailing_list.find()).map(link => link.mail));
	socket.on('mailingList/add', $.mailingListAdd);
	socket.on('mailingList/delete', $.mailingListDelete);
	socket.on('user/read', $.userRead);
	socket.on('users/read', $.usersRead);
	socket.on('contact/submit', $.contactSubmit);
	socket.on('contacts/read', $.contactsRead);
	socket.on('connect', () => { })
}

//socket.onAny((eventName, ...args) => console.log(eventName, ...args));
//socket.onAny((eventName, ...args) => console.log(Object.keys(socket.rooms)));
//socket.onAnyOutgoing((eventName, ...args) => console.log(eventName, ...args));

//console.log('a user connected');
//console.log(JSON.stringify(Object.entries(jsonData('links')).map(([k, v]) => ({ network: k, url: v }))));
//socket.emit('links', jsonData('links'));