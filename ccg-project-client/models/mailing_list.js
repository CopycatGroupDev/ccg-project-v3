import mongoose from "../config/mongoose.js";

const { Schema } = mongoose;

const mailingListSchema = new Schema({
    mail : { type : String, required : true },
});

export default mongoose.model('mailing_list', mailingListSchema)