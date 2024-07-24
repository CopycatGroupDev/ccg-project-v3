import cors from "cors";
import origin from "./originsIP.js";
export default cors;

export const options = {
    credentials: true,
    origin,
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
};