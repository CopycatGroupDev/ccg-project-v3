import mailing_list from "../models/mailing_list.js";

export default socket => async mail => {
    const Mail = await mailing_list.findOne({ mail });
    console.log(Mail);
    if (!Mail) {
        const newMail = new mailing_list({ mail });
        console.log(newMail);
        await newMail.save();
    };
    socket.emit('mailingList/read', (await mailing_list.find()).map(link => link.mail));
}