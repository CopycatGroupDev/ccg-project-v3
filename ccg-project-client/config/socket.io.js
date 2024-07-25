const { Server } = require('socket.io');
const { options } = require('./cors.js');
const httpServer = require('./httpServer.js');
//import { Server } from "socket.io";
//import { options } from "./cors.js";
//import httpServer from "./httpServer.js";

module.exports = new Server(httpServer, { cors: options });
//export default new Server(httpServer, { cors: options });
