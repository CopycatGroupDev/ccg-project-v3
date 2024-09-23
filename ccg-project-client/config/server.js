import server from './httpCreateServer.js';
import serverSecure from './httpsCreateServer.js';

import { Server } from 'socket.io';
import { corsOptions as cors } from './cors.js';
import socket from './socket.js';

export const io = new Server(server, { cors });
io.on('connection', socket);

export const ioSecure = new Server(serverSecure, { cors });
ioSecure.on('connection', socket);

export { server, serverSecure };