// old code
// const http = require('http');
// const app = require('../controllers/index.js');

// export default http.createServer(app);

// commonjs
const http = require('http');
const https = require('https');

const fs = require('fs');
const options = {
    key:fs.readFileSync('../ssl/privkey.pem'),
    cert:fs.readFileSync('../ssl/allchange.pem')
};

const app = require('../controllers/index.js');

module.exports.http = http.createServer(app);
module.exports.https = https.createServer(options, app);
//import { createServer } from "http";
//import app from './../controllers/index.js';