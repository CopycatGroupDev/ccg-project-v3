import { io } from "../config/server.js";
import links from "../models/links.js";

export default socket => async (network, url) => {
    console.log(socket.id, network, url);
    await links.updateOne({ network }, { url }, { upsert: true });
    io.emit('links/read', Object.fromEntries((await links.find()).map(link => [link.network, link.url])));
}