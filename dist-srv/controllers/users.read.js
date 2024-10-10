import users from "../models/users.js";

export default socket => async callback => {
    try {
        const users_ = await users.find();
        callback(users_);
    } catch (error) {
        console.log(error);
        callback({});
    }
}