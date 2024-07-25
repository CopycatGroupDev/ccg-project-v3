// old code
// import e from "./express.js";
// const app = e();

// import bp from "body-parser";
// import cors, { options as opt } from "./cors.js";
// import p from "path";
// import __d from "./__dirname.js";

// const ext = { extended: true }

// app.use(e.static(p.resolve(__d, 'dist')));
// app.use(e.static(p.resolve(__d)));
// app.use(cors(opt));
// app.use(e.json());
// app.use(e.urlencoded(ext));
// app.use(bp.urlencoded(ext));
// app.use(bp.json());

// new code
const express = require("./express.js");
const bodyParser = require("body-parser");
const cors = require("./cors.js");
const path = require("path");
const __dirnameX = require("./__dirname.js");

const app = express();
const ext = { extended: true };

app.use(express.static(path.resolve(__dirnameX, 'dist')));
app.use(express.static(__dirnameX));
app.use(cors.func(cors.options));
app.use(express.json());
app.use(express.urlencoded(ext));
app.use(bodyParser.urlencoded(ext));
app.use(bodyParser.json());

module.exports = app;