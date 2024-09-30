import mongoose from "../config/mongoose.js";

const { Schema } = mongoose;

const usersSchema = new Schema({
    username : { type : String, required : true },
    password : { type : String, required : true },
    email : { type : String, required : true },
    admin : { type : Boolean, default : false },
});

export default mongoose.model('users', usersSchema);