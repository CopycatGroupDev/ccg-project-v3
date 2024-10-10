import users from "../models/users.js";

export default socket => async (id, callback) => {
    try {
        const user = await users.findById(id);
        callback(user);
    } catch (error) {
        console.log(error);
        callback({});
    }
}