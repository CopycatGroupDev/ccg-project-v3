import { io } from '../config/server.js';
import axios from 'axios';

export default (socket) => {
	socket.leaveAll();
	socket.onAny((eventName, ...args) => console.log(eventName, ...args));
	//socket.onAny((eventName, ...args) => console.log(Object.keys(socket.rooms)));
	socket.onAnyOutgoing((eventName, ...args) => console.log(eventName, ...args));
	
	console.log('a user connected');
}