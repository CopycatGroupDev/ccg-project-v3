import e from "./express.js";
const app = e();

import bp from "body-parser";
import cors, { options as opt } from "./cors.js";
import p from "path";
import __d from "./__dirname.js";

const ext = { extended: true }

app.use(e.static(p.resolve(__d, 'dist')));
app.use(e.static(p.resolve(__d)));
app.use(cors(opt));
app.use(e.json());
app.use(e.urlencoded(ext));
app.use(bp.urlencoded(ext));
app.use(bp.json());

export default app;