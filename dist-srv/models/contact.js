import mongoose from "../config/mongoose.js";

const { Schema } = mongoose;

const contactSchema = new Schema({
    color : { type : String },
    href : { type : String },
    name : { type : String },
    firstname : { type : String },
    firm : { type : String },
    number : { type : String },
    mail : { type : String },
    message : { type : String },
    how: { type : String },
    city: { type : String },
    zip: { type : String },
    subject: { type : String }, 
    message: { type : String },
    date : { type : Date, default : Date.now }
});

export default mongoose.model('contact', contactSchema);