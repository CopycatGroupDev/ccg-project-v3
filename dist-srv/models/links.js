import mongoose from "../config/mongoose.js";

const { Schema } = mongoose;

const linksSchema = new Schema({
    network : { type : String, required : true },
    url : { type : String, required : true },
});

export default mongoose.model('links', linksSchema)