//import path, { dirname } from "path";
//import { fileURLToPath } from "url";

//export default path.resolve(dirname(fileURLToPath(import.meta.url)), '../..')

const { URL } = require('url');
const path = require('path');

module.exports = path.resolve(__dirname, '../..');
