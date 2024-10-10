import links from "../models/links.js";

export default socket => async (network) => {
    await links.deleteOne({ network });
    socket.emit('links/read', Object.fromEntries((await links.find()).map(link => [link.network, link.url])));
}