import app from './app.js';
import dotenv from 'dotenv'; // https://www.npmjs.com/package/dotenv
import fs from 'fs';

dotenv.config();
const { dev_mode, ssl_key, ssl_cert } = process.env;
console.log(dev_mode, typeof dev_mode);
const options = JSON.parse(dev_mode) ? {} : {
    key:fs.readFileSync(ssl_key),
    cert:fs.readFileSync(ssl_cert)
};

import { createServer } from 'http';
export default createServer(options, app);