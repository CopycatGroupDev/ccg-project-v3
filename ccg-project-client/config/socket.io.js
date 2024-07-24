import { Server } from "socket.io";
import { options } from "./cors.js";
import httpServer from "./httpServer.js";

export default new Server(httpServer, { cors: options });