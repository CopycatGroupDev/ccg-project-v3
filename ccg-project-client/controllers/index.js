const path = require("path");
const app = require("../config/app.js");
const pages = require("../config/pages.js");
const __dirnameX = require("../config/__dirname.js");

// import path from "path";
// import app from "../config/app.js";
// import pages from "../config/pages.js";
// import __dirname from "../config/__dirname.js";

for (const page of pages) app.get(page, (req, res) => res.sendFile(path.join(__dirnameX, 'dist', 'index.html')));
app.get('/boutique-sevres', (req, res) => res.redirect('/sevres'));
//app.get('/*', (req, res) => res.redirect('/'));

module.exports = app;