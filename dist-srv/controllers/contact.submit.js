import contact from "../models/contact.js";

export default socket => async (color, href, data, callback) => {
    try {
        console.log({ color, href, ...Object.fromEntries(data.map(({ name, value }) => [name, value])) });

        const newContact = new contact({ color, href, ...Object.fromEntries(data.map(({ name, value }) => [name, value])) });
        await newContact.save();
        //const inputs = [["URL", href], ...data?.map(({ placeholder, value }) => [placeholder, value])];
        //const message = inputs.map(([placeholder, value]) => `${placeholder}: ${value}`).join('\n');
        //emailjs.send('service_vxg3w2p', 'template_phpkqbm', { color, message, to_name: 'Erwan' }, 'lY6gm08EUXQdiwdgh');
        callback(true);
    } catch (error) {
        console.log(error);
        callback(false);
    }
}