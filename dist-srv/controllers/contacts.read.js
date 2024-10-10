import contact from "../models/contact.js";

export default socket => async callback => {
    try {
        const contacts = await contact.find();
        callback(contacts);
    } catch (error) {
        console.log(error);
        callback({});
    }
}