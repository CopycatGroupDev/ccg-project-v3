import { createServer } from "http";
import app from './../controllers/index.js';

export default createServer(app);