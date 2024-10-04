// CommonJS
const cors = require('cors');
const origin = require('./originsIP.js');

module.exports.func = cors;

module.exports.options = {
    credentials: true,
    origin,
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
};

// Old code
//import cors from "cors";
//import origin from "./originsIP.js";
//export default cors;

//export const options = {
//    credentials: true,
//    origin,
//    methods: ["GET", "POST"],
//    optionsSuccessStatus: 200,
//};
