// old code
// const http = require('http');
// const app = require('../controllers/index.js');

// export default http.createServer(app);

// commonjs
const http = require('https');
const app = require('../controllers/index.js');

module.exports = http.createServer(app);

//import { createServer } from "http";
//import app from './../controllers/index.js';