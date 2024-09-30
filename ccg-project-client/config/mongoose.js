import dotenv from 'dotenv'
dotenv.config();

import { ObjectId } from "mongodb";
import { mongoose } from "mongoose";
const { Schema } = mongoose;

const { DB_USERNAME : dbu, DB_PASSWORD : dbp, DB_CLUSTER : dbc, DB_NAME : dbn } = process.env;
const $connectionString = `mongodb+srv://${dbu}:${dbp}@${dbc}.mongodb.net/${dbn}?retryWrites=true&w=majority`;

//console.log($connectionString)
await mongoose.connect($connectionString);

export default mongoose;
export { Schema, ObjectId }