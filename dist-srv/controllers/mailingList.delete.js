import mailing_list from "../models/mailing_list.js";

export default socket => async mail => {
    await mailing_list.deleteOne({ mail });
    socket.emit('mailingList/read', (await mailing_list.find()).map(link => link.mail));
}