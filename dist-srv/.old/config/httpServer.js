// const http = require('http');
// const app = require('../controllers/index.js');

// export default http.createServer(app);

require('dotenv').config()
const { dev_mode, ssl_key, ssl_cert } = process.env;
console.log(dev_mode, typeof dev_mode);

const http = require('http');
const https = require('https');

const fs = require('fs');
const options = JSON.parse(dev_mode) ? {} : {
    key:fs.readFileSync(ssl_key),
    cert:fs.readFileSync(ssl_cert)
};

const app = require('../controllers/index.js');

module.exports.http = http.createServer(app);
module.exports.https = https.createServer(options, app);
//import { createServer } from "http";
//import app from './../controllers/index.js';