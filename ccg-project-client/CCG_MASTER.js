import crypt from "./config/crypt.js";
import { server, serverSecure } from "./config/server.js";
import dotenv from 'dotenv'
dotenv.config();

const { PORT, PORT2 } = process.env;

server.listen(PORT, () => { console.log('listening on *:'+PORT); });
serverSecure.listen(PORT2, () => { console.log('listening on *:'+PORT2); })