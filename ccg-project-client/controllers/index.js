import path from "path";
import app from "../config/app.js";
import pages from "../config/pages.js";
import __dirname from "../config/__dirname.js";

for (const page of pages) app.get(page, (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

export default app;